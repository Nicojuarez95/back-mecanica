import Product from "../../models/Product.js"

export default async function exists(req, res, next) {
    try {
        const product = await Product.findOne({ code: req.body.code })
        if (!product) {
            return next()
        }
        await Product.findOneAndUpdate(
            { code: req.body.code },
            { stock: Number(req.body.stock) + Number(product.stock) },
            { new: true }
        )
        return res.status(200).json({
            success: true,
            message: 'Producto ya existente, se agrega al stock'
        })
    } catch (error) {
        next(error)
    }
}