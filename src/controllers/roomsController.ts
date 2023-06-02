import { Request, Response } from "express";
import { rooms_BD_createRoom, rooms_BD_deleteRoom, rooms_BD_editRoom, rooms_BD_getAll, rooms_BD_getUniqueRoom } from "../repositories/roomsRepository";

interface Room {
    id?: number | string
    name: string
    image1: string
    image2: string
    image3: string
    bedType: string
    roomFloor: string
    facilities: string
    price: number
    offer: boolean
    discount: number | null
}; 

export const rooms_getAll = async (req: Request, res: Response) => {
    try {
        return res.send( await rooms_BD_getAll() );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_getUnique = async (req: Request<{id: number}>, res: Response) => {
    try {
        return res.send( await rooms_BD_getUniqueRoom(req.params.id) );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_createOne = async (req: Request<{}, Room>, res: Response) => {
    try {
        const newRoom = req.body;
        return res.send( rooms_BD_createRoom(newRoom) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_editOne = async (req: Request<{id: number}, Room>, res: Response) => {
    try {
        const newRoom = req.body;
        return res.send( rooms_BD_editRoom(req.params.id, newRoom) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_deleteOne = async (req: Request<{id: number}>, res: Response) => {
    try {
        return res.send( rooms_BD_deleteRoom(req.params.id) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};