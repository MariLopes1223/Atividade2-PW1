import { Request, Response } from "express";
import { DeleteTechnologyCaseUse } from "../model/DeleteTechnologyCaseUse";

export class DeleteTechnologyController{
    async handle(req:Request,res:Response):Promise<Response>{
        const { id } = req.params;

        const deleteTechnologyCaseUse= new DeleteTechnologyCaseUse();
        await deleteTechnologyCaseUse.execute({id});

        return res.status(200).json({message:"Tecnologia removida com sucesso!"})
    }
}