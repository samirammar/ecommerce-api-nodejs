import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,  ref: 'User'},
    quantity: {type: Number, default: 1},
},{timestamps: true});

export default mongoose.model("Cart", CartSchema);