// const express = require('express');
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';



dotenv.config();
const app = express();



app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 3000, () => {
    connectDB();
    console.log('Server is running on port ' + (process.env.PORT || 3000));
})