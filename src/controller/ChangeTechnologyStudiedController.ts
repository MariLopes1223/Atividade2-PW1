import { Request, Response } from "express";
import { ChangeTechnologyStudiedCaseUse } from "../model/ChangeTechnologyStudiedCaseUse";

export class ChangeTechnologyStudiedController{
    async handle (req: Request, res: Response): Promise <Response>{
        const { studied } = req.body;
        const { id } = req.params;

        const changeTechnologyStudiedCaseUse = new ChangeTechnologyStudiedCaseUse()
        const tecnologia = await changeTechnologyStudiedCaseUse.execute({ studied, id });

        return res.status(201).json(tecnologia);
    }
}