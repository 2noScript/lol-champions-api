import express from "express";
import "dotenv/config";
import apiV1 from "./api_v1/index.js";

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(`serve on ${port}`);
});

app.use("/api/v1", apiV1);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
