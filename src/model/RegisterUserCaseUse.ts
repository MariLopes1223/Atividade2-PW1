import { uuid } from "uuidv4";
import { prisma } from "../database/repositoryUser";

type Params ={
    name: string;
    username: string;
}

export class RegisterUserCaseUse{
     async execute({name, username}:Params){

        const user = await prisma.usuario.findUnique({
            where: {
                username
            }
        })
        if (user !== null){
            return {message: 'User já existe'}
        }
        const userNew = await prisma.usuario.create({
            data:{
                id: uuid(),
                name,
                username,
                tecnologias:{}
            },
        })
        return userNew;
     }
}