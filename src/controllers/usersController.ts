import { Request, Response } from "express";
import { users_BD_createUser, users_BD_deleteUser, users_BD_editUser, users_BD_getAll, users_BD_getUniqueUser } from "../repositories/usersRepository";

export const users_getAll = async (req: Request, res: Response) => {
    try {
        const result = await users_BD_getAll();
        return res.send( result );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_getUnique = async (req: Request, res: Response) => {
    try {
        const result = await users_BD_getUniqueUser(req.params.id);
        return res.send( result );
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_createOne = async (req: Request, res: Response) => {
    try {
        const result = await users_BD_createUser(req.body);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_editOne = async (req: Request, res: Response) => {
    try {
        const result = await users_BD_editUser(req.params.id, req.body);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};

export const users_deleteOne = async (req: Request, res: Response) => {
    try {
        const result = await users_BD_deleteUser(req.params.id);
        return res.send( result ).status(200);
    } catch (err: any) {
        return res.sendStatus(500);
    }
};