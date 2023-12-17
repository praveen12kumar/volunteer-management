import express from 'express';
import {config} from "dotenv";

config({
    path: "backend/config/config.env",
})

const app = express();



// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));



export default app;