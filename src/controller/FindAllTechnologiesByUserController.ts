import { Request, Response } from "express";
import { FindAllTechnologiesByUserCaseUse } from "../model/FindAllTechnologiesByUserCaseUse";

export class FindAllTechnologiesByUserController{
    async handle(req:Request, res: Response): Promise<Response>{
        const {id} = req.user;

        const findAllTechnologiesByUserCaseUse = new FindAllTechnologiesByUserCaseUse();
        const tecnologias = await findAllTechnologiesByUserCaseUse.execute({id});

        return res.status(200).json(tecnologias);
    }
}