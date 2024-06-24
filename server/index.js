import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

app.use(cors(
        {
           origin: 'https://chronicles-mu.vercel.app/', 
           methods: ['GET', 'POST', 'PATCH', 'DELETE'],
           credentials: true, 
        }
));
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({limit: "30mb", extended:true}));

app.use('/posts', postRoutes);
app.use('/', (req, res)=>{res.json({"msg": "welcome to chronicles.com"})});

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
        .then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
        .catch((error)=>console.log(error.message));

export default app;
