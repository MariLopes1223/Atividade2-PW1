type Technology = {
    id: string;
    title: string;
    studied: boolean;
    deadline: Date;
    createdAt: Date,
}
type Usuario = {
    id: string,
    name: string,
    username: string;
}


declare namespace Express{
    export interface Request{
        user: Usuario;
    }
}