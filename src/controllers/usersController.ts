import { Request, Response } from "express";
import { users_BD_createUser, users_BD_deleteUser, users_BD_editUser, users_BD_getAll, users_BD_getUniqueUser } from "../repositories/usersRepository";

interface User {
    id?: number | string
    name: string
    job_description: string
    phone: string
    schedule: number[]
    status?: string
    image: string
};

export const users_getAll = async (req: Request, res: Response) => {
    try {
        return res.send( await users_BD_getAll() );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_getUnique = async (req: Request<{id: number}>, res: Response) => {
    try {
        return res.send( await users_BD_getUniqueUser(req.params.id) );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_createOne = async (req: Request<{}, User>, res: Response) => {
    try {
        const newUser = req.body;
        return res.send( users_BD_createUser(newUser) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_editOne = async (req: Request<{id: number}, User>, res: Response) => {
    try {
        const newUser = req.body;
        return res.send( users_BD_editUser(req.params.id, newUser) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_deleteOne = async (req: Request<{id: number}>, res: Response) => {
    try {
        return res.send( users_BD_deleteUser(req.params.id) ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};