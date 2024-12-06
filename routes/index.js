import express from "express";
import { pqrsRouter } from "./pqrs.routes.js";


const router = express.Router();


export function pqrsApi(app){
    app.use("/api/v1", router);
    
    router.use("/pqrs", pqrsRouter);

}