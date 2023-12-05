import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,  ref: 'User'},
    customerId: {type: String, required: true},
    productId: {type: mongoose.Schema.Types.ObjectId,  ref: 'Product'},
    quantity: {type: Number, required: true},
    subTotal: {type: Number, required: true},
    deliveryStatus: {type: String, required: true, default: "pending"},
    paymentStatus: {type: String, required: true},
    totlal: {type: Number, required: true}
},{timestamps: true});

export default mongoose.model("Order", OrderSchema);