import express,{json} from "express";
import apiroutes from "./api-routes.js";
const listen_port=8000;
const app=express();
app.use('/',apiroutes);
app.use(json());
app.listen(listen_port,()=>{
    console.log(`Listening to port${listen_port}`)
})