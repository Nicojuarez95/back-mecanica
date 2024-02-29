import Product from "../../models/Product.js"

async function create(req, res, next) {
    try {
        const product = await Product.create(req.body)
        return res.status(201).json({
            success: true,
            message: "Nuevo producto agregado",
            product
        })
    } catch (error) {
        next(error)
    }
}

export default create