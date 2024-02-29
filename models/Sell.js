import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        products: { type: Array, required: true },
        totalValue: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

const Sell = mongoose.model('sells', schema);

export default Sell;