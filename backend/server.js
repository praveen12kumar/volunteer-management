import app from './app';



app.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT} on ${process.env.NODE_ENV} mode`);
})