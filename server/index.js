import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

const corsOptions = {
     origin: 'https://chronicles-pi.vercel.app',
     methods: ['GET', 'POST', 'OPTIONS'],
     allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({limit: "30mb", extended:true}));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.get('/', (req, res)=>{res.send("welcome")});
 
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
        .then(() => app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
        .catch((error)=>console.log(error.message));

export default app;