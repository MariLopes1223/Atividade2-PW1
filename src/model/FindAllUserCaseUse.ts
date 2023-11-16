import { prisma } from "../database/repositoryUser";
import Usuario from "./entities/Usuario";

export class FindAllUserCaseUse{
    async execute():Promise<Usuario[]>{
        const usuarios = await prisma.usuario.findMany({
            include:{
                tecnologias:{
                    select:{
                        id: true,
                        title: true,
                        studied: true,
                        deadline: true,
                        createdAt: true
                    }
                }
            }
        });
        console.log(usuarios);
        return usuarios;
    }
}