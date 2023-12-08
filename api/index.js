import express from "express";
const listen_port=8000;
const app=express();
app.listen(listen_port,()=>{
    console.log(`Listening to port${listen_port}`)
})