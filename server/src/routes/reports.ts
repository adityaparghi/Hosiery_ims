import { Router } from "express";
import { reportController } from "../controllers/reportsController.js";

const reportRouter = Router();

reportRouter.get('/', reportController);

export default reportRouter;