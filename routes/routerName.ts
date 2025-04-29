import { Router } from "express";
const routerName = Router();
const controllerName = require("../controllers/controllerName");

routerName.get("/", controllerName.index);

export default routerName;
