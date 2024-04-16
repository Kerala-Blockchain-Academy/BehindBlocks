import { Router } from "express";
import instance from "./contract.js";

const router = Router();

router.get("/", function (req, res) {
  res.send("Hello World");
});

router.post("/create", async function (req, res) {
  const data = req.body;
  try {
    const tx = await instance.store(data.input);
    console.log(tx);
    res.status(201).json({ success: true, tx: "tx" });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

router.get("/read", async function (req, res) {
  try {
    const result = await instance.retrieve();
    res.status(200).json('result');
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
