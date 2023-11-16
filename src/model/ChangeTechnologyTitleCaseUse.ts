import { prisma } from "../database/repositoryUser";

import Technology from "./entities/Technology";


type Params = {
    id: string;
    title: string;
    deadline: Date;
}

export class ChangeTechnologyTitleCaseUse {
    async execute ({id, title, deadline}:Params): Promise <Technology>{

        const tecnologia = await prisma.technology.update({
            where:{
                id,
            },
            data: {
                title,
                deadline
            }
        })
        return tecnologia;
    }
}