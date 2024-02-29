import Product from "../../models/Product.js"

export default async function update(req, res, next) {
    try {
        const product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!product) {
            return res.status(404).json({
                message: 'Producto no encontrado'
            });
        }
        return res.status(200).json({
            success: true,
            message: "Producto actualizado",
            product
        });
    } catch (error) {
        next(error)
    }
}