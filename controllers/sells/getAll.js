import Sell from "../../models/Sell.js";

export default async function get_all(req,res,next){
    try{
        const sells = await Sell.find()
        if(sells){
            return res.status(200).json({
                success: true,
                sells
            })
        }
    }catch(error){
        next(error)
    }
}