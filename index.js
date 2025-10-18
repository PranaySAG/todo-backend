import express from "express";
import dotenv from "dotenv";
import { TODO_ITEMS } from "./config.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors()); 

let todos = TODO_ITEMS;

app.get("/", (req, res) => {
    res.send("Todo API is running");
});

app.get("/todos", (req, res) => {
    res.json({
        success: true,
        data: todos,
        message: "Todo items fetched successfully"
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});