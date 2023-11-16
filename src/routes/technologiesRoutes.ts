import {Router} from 'express';

// middleware
import { checkExistsUserAccount } from '../middlewares/checkExistsUserAccount';

//controllers
import { RegisterTechnologyController } from '../controller/RegisterTechnologyController';
import { FindAllTechnologiesByUserController } from '../controller/FindAllTechnologiesByUserController';
import { DeleteTechnologyController } from '../controller/DeleteTechnologyController';
import { ChangeTechnologyTitleController } from '../controller/ChangeTechnologyTitleController';
import { ChangeTechnologyStudiedController } from '../controller/ChangeTechnologyStudiedController';

const routesTechnologies = Router();

// rotas relacionadas com as tecnologia do usuario 

//inserir nova tecnologia
const registerTechnologyController = new RegisterTechnologyController();
routesTechnologies.post('/technologies', checkExistsUserAccount, registerTechnologyController.handle)

//pegar todas as tecnologias
const findAllTechnologiesByUserController = new FindAllTechnologiesByUserController();
routesTechnologies.get('/technologies', checkExistsUserAccount, findAllTechnologiesByUserController.handle);

//deletar uma tecnologia
const deleteTechnologyController = new DeleteTechnologyController();
routesTechnologies.delete('/technologies/:id', deleteTechnologyController.handle);


//alterar title e deadline de uma tecnologia
const changeTechnologyTitleController = new ChangeTechnologyTitleController();
routesTechnologies.put('/technologies/:id', changeTechnologyTitleController.handle);

//mudar o valor de "studied" de uma tecnologia
const changeTechnologyStudiedController = new ChangeTechnologyStudiedController();
routesTechnologies.patch('/technologies/:id/studied', changeTechnologyStudiedController.handle);

export {routesTechnologies};