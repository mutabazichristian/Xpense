// ROUTES FOR USER AUTHENTICATION AND AUTHOLIZATION

import express from "express";
import { login } from "../controllers/authController.js";
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const result = await login(req.body); // Assuming login is an asynchronous function
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
