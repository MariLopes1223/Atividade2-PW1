import { Router } from "express";
import { routesUsers } from "./userRoutes";
import { routesTechnologies } from "./technologiesRoutes";

const routes = Router();

routes.use(routesUsers);
routes.use(routesTechnologies);

export {routes};