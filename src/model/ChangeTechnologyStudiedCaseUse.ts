import { prisma} from "../database/repositoryUser";

import Technology from "./entities/Technology";

type Params = {
    id: string,
    studied: boolean;
}

export class ChangeTechnologyStudiedCaseUse{
    async execute ({id, studied}:Params): Promise <Technology>{
    
        const tecnologia = await prisma.technology.update({
            where:{
                id
            },
            data: {
                studied,
            }
        })

        return tecnologia;
    }
}