import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "30mb", extends: true }));
app.use(express.urlencoded({ limit: "30mb", extends: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://CaptainD:RooPoo$36@cluster0.jz469u5.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log("ERROR", error));
