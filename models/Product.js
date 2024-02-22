import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    // description: { type: String, required: true },
    // photo: { type: String, required: true },
});

const Product = mongoose.model('products', schema);

export default Product