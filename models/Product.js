import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    category: {type: String, required: true},
    imageUrl: {type: [String], required: true},
    oldPrice: {type: Number, required: true},
    sizes: {
        type: [
            {
                size: {type: String, required: true},
                isSelected: {type: Boolean, required: false, default: false}
            }
        ]
    },
    price: {type: Number, required: true},
    description: {type: String, required: true}
},{timestamps: true});

export default mongoose.model("Product", ProductSchema);