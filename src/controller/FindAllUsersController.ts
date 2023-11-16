import { Request, Response } from "express";
import { FindAllUserCaseUse } from "../model/FindAllUserCaseUse";

export class FindAllUsersController{
    async handle(req:Request, res: Response): Promise <Response>{
        const findAllUserCaseUse = new FindAllUserCaseUse();
        const users = await findAllUserCaseUse.execute();

        return res.status(200).json(users);
    }
}