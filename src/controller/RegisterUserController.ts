import { Request, Response } from "express";
import {RegisterUserCaseUse} from '../model/RegisterUserCaseUse';

export class RegisterUserController{
    async handle(req:Request,res:Response){
        const { name, username } = req.body;

        const registerUserCaseUse = new RegisterUserCaseUse();

        const result = await registerUserCaseUse.execute({name, username});
        return res.status(200).json(result);
    }
}