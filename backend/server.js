import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ quiet: true, path: "./.env" });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(process.env.PORT, () => {
  console.log("API em execução");
});
