import express from "express"
// SCHEMAS
import validator from "../middlewares/validator.js"
import createSchema from "../schemas/createProduct.js"
import updateSchema from '../schemas/updateProduct.js'
//MIDDLEWARES
import exists from '../middlewares/products/exists.js'
// CONTROLLERS
import getAll from '../controllers/products/getAll.js'
import create from '../controllers/products/create.js'
import update from '../controllers/products/update.js'
import destroy from '../controllers/products/destroy.js'

let router = express.Router();

router.get('/', getAll)
router.post('/create', validator(createSchema), exists, create)
router.put("/update/:id", validator(updateSchema), update)
router.delete("/delete/:id", destroy)

export default router