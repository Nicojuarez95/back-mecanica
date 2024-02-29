import Sell from "../../models/Sell.js";
import Product from '../../models/Product.js';

async function create(req, res, next) {
    try {
        let totalValue = 0;

        for (const product of req.body.products || []) {
            const searchedProduct = await Product.findOne({ code: product.code });
            if (!searchedProduct) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontro el producto ${product.name}`
                });
            }
        }

        for (const product of req.body.products || []) {
            const searchedProduct = await Product.findOne({ code: product.code });
            
            if (product.stock > searchedProduct.stock) {
                return res.status(500).json({
                    success: false,
                    message: `Stock insuficiente para el producto ${searchedProduct.name}`
                });
            }

            await Product.findOneAndUpdate(
                { code: product.code },
                { stock: searchedProduct.stock - product.stock }
            );

            totalValue += Number(product.price);
        }

        req.body.totalValue = totalValue;
        const sell = await Sell.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Nueva venta agregada",
            sell
        });
    } catch (error) {
        next(error);
    }
}

export default create;
