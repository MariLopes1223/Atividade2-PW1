import { Request,Response } from "express";
import { DeleteUserCaseUse } from "../model/DeleteUserCaseUse";

export class DeleteUserController{
    async handle(req:Request,res:Response):Promise<Response>{
        const { username } = req.user;

        const deleteUserCaseUse= new DeleteUserCaseUse();
        await deleteUserCaseUse.execute({username});

        return res.status(200).json({message:"Cliente removido com sucesso!"})
    }
}