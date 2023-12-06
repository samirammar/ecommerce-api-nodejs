import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import productsRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import ordersRoutes from './routes/orders.js';
import cartsRoutes from './routes/carts.js';


configDotenv()
const app = express();

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}))


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB Connected!");
}).catch((error)=>{
    console.error(error);
})

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/carts', cartsRoutes);






// Global handler error
app.use((error, req, res, next) => {
    res.status(500).json({
        status: error.status || 500,
        message: error._message || error.message  
    });
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server Running On Port: ", port);
})
