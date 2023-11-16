import { prisma } from "../database/repositoryUser";
import Technology from "./entities/Technology";

type Params ={
    id:string;
}

export class FindAllTechnologiesByUserCaseUse{
    async execute({id}: Params): Promise<Technology[]>{
        const tecnologias = await prisma.technology.findMany({
            where:{
                userId: id
            }
        });
        return tecnologias;
    }
}