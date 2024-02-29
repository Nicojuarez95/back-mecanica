import Product from "../../models/Product.js"

export default async function destroy(req, res, next) {
    try {
        let product = await Product.findOneAndDelete({ _id: req.params.id })
        if (product) {
            return res.status(200).json({
                success: true,
                message: 'Producto eliminado con éxito'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            })
        }
    } catch (err) {
        next(err)
    }
}
