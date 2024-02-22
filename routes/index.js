import express from 'express'
import booksRouter from "../routes/book.js"
import userRouter from '../routes/adminUser.js'
import productRouter from '../routes/products.js'
import sellRouter from '../routes/sells.js'

let router = express.Router();

router.use('/book', booksRouter);
router.use('/admin',userRouter)
router.use('/products', productRouter)
router.use('/sells', sellRouter)

export default router