import express from "express"
// SCHEMAS
import validator from "../middlewares/validator.js"
import createSchema from "../schemas/createSell.js"
//MIDDLEWARES

// CONTROLLERS
import create from '../controllers/sells/create.js'
import getAll from '../controllers/sells/getAll.js'

let router = express.Router();

router.get('/', getAll)
router.post('/create', validator(createSchema), create)

export default router