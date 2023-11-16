import { prisma } from "../database/repositoryUser";

type Params = {
    id: string;
}

export class DeleteTechnologyCaseUse{
    async execute ({id}:Params): Promise<void>{
        await prisma.technology.delete({
            where:{
                id,
            }
        })
    }
};