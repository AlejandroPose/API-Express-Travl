import { Request, Response } from "express";
import { bookigns_BD_createBooking, bookings_BD_deleteBooking, bookings_BD_editBooking, bookings_BD_getAll, bookings_BD_getUniqueBooking } from "../repositories/bookingsRepository";

interface Booking {
    id?: number | string
    guest: string
    image: string
    specialRequest: string
    roomID: number
    orderDate: string
    checkIn: string
    checkOut: string
}; 

export const bookings_getAll = async (req: Request, res: Response) => {
    try {
        return res.send( await bookings_BD_getAll() );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_getUnique = async (req: Request<{id: number}>, res: Response) => {
    try {
        return res.send( await bookings_BD_getUniqueBooking(req.params.id) );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_createOne = async (req: Request<{}, Booking>, res: Response) => {
    try {
        const newBooking = req.body;
        return res.send( bookigns_BD_createBooking(newBooking) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_editOne = async (req: Request<{id: number}, Booking>, res: Response) => {
    try {
        const newBooking = req.body;
        return res.send( bookings_BD_editBooking(req.params.id, newBooking) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const bookings_deleteOne = async (req: Request<{id: number}>, res: Response) => {
    try {
        return res.send( bookings_BD_deleteBooking(req.params.id) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};