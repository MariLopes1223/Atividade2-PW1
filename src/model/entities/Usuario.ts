import Technology from "./Technology";

export default interface Usuario{
    id: string;
    name: string; 
    username: string;
    tecnologias: Technology[];
}