import { Request, Response } from "express";
import { RegisterTechnologyCaseUse } from "../model/RegisterTechnologyCaseUse";

export class RegisterTechnologyController{
    async handle(req:Request, res: Response): Promise<Response>{
        const { title, deadline } = req.body;
        const { username }= req.user;

        const registerTechnologyCaseUse = new RegisterTechnologyCaseUse();
        const technology = await registerTechnologyCaseUse.execute({title, deadline, username});

        return res.status(201).json(technology);
    }
}