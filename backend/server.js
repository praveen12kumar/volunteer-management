import app from './app.js';
import connectDB from './config/data.js';

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT} on ${process.env.NODE_ENV} mode`);
})