import { Request, Response } from "express";
import { bookigns_BD_createBooking, bookings_BD_deleteBooking, bookings_BD_editBooking, bookings_BD_getAll, bookings_BD_getUniqueBooking } from "../repositories/bookingsRepository";

export const bookings_getAll = async (req: Request, res: Response) => {
    try {
        const result = await bookings_BD_getAll();
        return res.send( result );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_getUnique = async (req: Request, res: Response) => {
    try {
        const result = await bookings_BD_getUniqueBooking(req.params.id);
        return res.send( result );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_createOne = async (req: Request, res: Response) => {
    try {
        const result = await bookigns_BD_createBooking(req.body);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_editOne = async (req: Request, res: Response) => {
    try {
        const result = await bookings_BD_editBooking(req.params.id, req.body);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_deleteOne = async (req: Request, res: Response) => {
    try {
        const result = await bookings_BD_deleteBooking(req.params.id);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};