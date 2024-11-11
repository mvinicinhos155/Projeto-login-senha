import { Router } from "express";
import ControllersUser , {libpassword} from "./controllers/ControllersUser.js";

const routes = Router();

routes.get("/users", ControllersUser.index);
routes.post("/users", libpassword ,ControllersUser.create);
routes.put("/users/:id", libpassword, ControllersUser.update);''
routes.delete("/users/:id", ControllersUser.detroy);

export default routes;