//middleware
import {checkExistsUserAccount} from '../middlewares/checkExistsUserAccount';

//controllers
import {RegisterUserController} from '../controller/RegisterUserController';
import { DeleteUserController } from '../controller/DeleteUserContoller';
import { FindAllUsersController } from '../controller/FindAllUsersController';

//rotas relacionadas ao usuário
import { Router } from 'express';

const routesUsers = Router();

//criar um novo usuário
const registerUserController = new RegisterUserController();
routesUsers.post('/users', registerUserController.handle);
 
 //deletar um usuario
const deleteUserContoller = new DeleteUserController();
routesUsers.delete('/users', checkExistsUserAccount, deleteUserContoller.handle);

//pegar todos usuarios
const findAllUsersController = new FindAllUsersController();
routesUsers.get('/account/all', findAllUsersController.handle);

export {routesUsers}; 