import { prisma } from "../database/repositoryUser";

type Params ={
    username: string;
}

export class DeleteUserCaseUse{
    async execute ({username}:Params): Promise<void>{
        await prisma.usuario.delete({
            where:{
                username
            }
        })
    }
};