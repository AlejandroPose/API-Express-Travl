import { Request, Response } from "express";
import { rooms_BD_createRoom, rooms_BD_deleteRoom, rooms_BD_editRoom, rooms_BD_getAll, rooms_BD_getUniqueRoom } from "../repositories/roomsRepository";

export const rooms_getAll = async (req: Request, res: Response) => {
    try {
        return res.send( await rooms_BD_getAll() );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_getUnique = async (req: Request, res: Response) => {
    try {
        return res.send( await rooms_BD_getUniqueRoom(req.params.id) );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_createOne = async (req: Request, res: Response) => {
    try {
        return res.send( rooms_BD_createRoom(req.body) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_editOne = async (req: Request, res: Response) => {
    try {
        return res.send( rooms_BD_editRoom(req.params.id, req.body) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const rooms_deleteOne = async (req: Request, res: Response) => {
    try {
        return res.send( rooms_BD_deleteRoom(req.params.id) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};