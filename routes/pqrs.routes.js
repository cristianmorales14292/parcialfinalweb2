import express from "express";
import { index, create, destroy, update  } from '../services/pqrs.service.js';
export const pqrsRouter = express.Router();




pqrsRouter.get("/", async (req, res) => {
    const pqrs = await index();
    res.render('index', {
        pqrs
    });
})


pqrsRouter.post("/", async (req, res) => {
    console.log("body", req.body);
    let { title, description, category, email, name } = req.body;
    await create({ title, description, category, email, name });
    res.redirect("/pqrs");
})

pqrsRouter.post('/edit/:id', async (req, res) => {
    console.log("params", req.params);
    const {id} = req.params;
    let { title, description, category, email, name } = req.body;
    await update(id, {title, description, category, email, name });
    res.redirect ("/pqrs");
})


pqrsRouter.post("/destroy/:id", async (req, res) => {
    console.log("params", req.params);
    const { id } = req.params;
    await destroy(id);
    res.redirect("/pqrs");
})

