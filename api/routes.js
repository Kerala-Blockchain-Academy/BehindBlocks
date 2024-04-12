import { Router } from "express";
import instance from "./contract.js";

const router = Router();

router.get("/", function (req, res) {
  res.send("Hello World");
});

router.post("/create", async function (req, res) {
  const data = req.body;
  const txn = await instance.store(data.inputMsg);
  console.log(txn);
  res.status(201).json({ Success: txn });
});

router.get("/read", async function (req, res) {
  const result = await instance.retrieve();
  res.json(result);
});

export default router;
