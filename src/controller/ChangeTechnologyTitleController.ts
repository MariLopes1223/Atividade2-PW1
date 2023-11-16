import { Request, Response } from "express";
import { ChangeTechnologyTitleCaseUse } from "../model/ChangeTechnologyTitleCaseUse";

export class ChangeTechnologyTitleController{
    async handle (req: Request, res: Response): Promise <Response>{
        const { title, deadline } = req.body;
        const { id } =  req.params;

        const changeTechnologyTitleCaseUse = new ChangeTechnologyTitleCaseUse();
        const tecnologia = await changeTechnologyTitleCaseUse.execute({title, deadline, id});

        return res.status(201).json(tecnologia);
    }
}