import Product from "../../models/Product.js";

export default async function get_all(req,res,next){
    try{
        const products = await Product.find()
        if(products){
            return res.status(200).json({
                success: true,
                products
            })
        }
    }catch(error){
        next(error)
    }
}