import {Router} from "express";
import instance from "./app.js";
const router= Router();
//let info;
router.get('/',function(req,res){
    res.send("Hello World");
})
router.post('/create',async function(req,res){
    const data= req.body;
   // info=data.inputMsg;
   const txn=await instance.store(data.inputMsg);
   console.log(txn);
    res.status(201).json({"Success":txn});
    
})
router.get('/read',async function(req,res){
    const result=await instance.retrieve();
    res.json(result);
})
export default router;