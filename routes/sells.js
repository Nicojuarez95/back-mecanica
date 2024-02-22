import express from "express"
// SCHEMAS
import validator from "../middlewares/validator.js"
import createSchema from "../schemas/createSell.js"
//MIDDLEWARES

// CONTROLLERS
import create from '../controllers/sells/create.js'

let router = express.Router();

router.post('/create', validator(createSchema), create)

export default router