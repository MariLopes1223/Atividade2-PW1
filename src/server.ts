const express = require('express');
const { routes } = require('./routes');


export type Technology = {
    id: String;
    title: string;
    deadline: Date;
    create_at?: Date;
    studied: boolean;
}

export type UserBody = {
    id: String;
    name: string;
    username: string;
    tecnologias: Technology[];
}

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, ()=>{
    console.log('server online na porta 3000');   
})