import { prisma } from "../database/repositoryUser";

import Technology from "./entities/Technology";

type Params ={
    title: string;
    deadline: Date;
    username: string;
}

export class RegisterTechnologyCaseUse{
    async execute({title, deadline, username}:Params):Promise<Technology>{

        const tecnologia = await prisma.technology.create({
            data:{
                title,
                studied: false,
                deadline,
                usuario:{
                    connect: {username},
                }
            }
        })
        return tecnologia;
    }
}