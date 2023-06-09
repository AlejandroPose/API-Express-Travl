import { Request, Response } from "express";
import { rooms_BD_createRoom, rooms_BD_deleteRoom, rooms_BD_editRoom, rooms_BD_getAll, rooms_BD_getUniqueRoom } from "../repositories/roomsRepository";

export const rooms_getAll = async (req: Request, res: Response) => {
    try {
        const result = await rooms_BD_getAll();
        return res.send( result );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_getUnique = async (req: Request, res: Response) => {
    try {
        const result = await rooms_BD_getUniqueRoom(req.params.id);
        return res.send( result );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_createOne = async (req: Request, res: Response) => {
    try {
        const result = await rooms_BD_createRoom(req.body);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_editOne = async (req: Request, res: Response) => {
    try {
        const result = await rooms_BD_editRoom(req.params.id, req.body);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_deleteOne = async (req: Request, res: Response) => {
    try {
        const result = await rooms_BD_deleteRoom(req.params.id);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};