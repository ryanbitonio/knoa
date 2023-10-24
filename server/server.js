import express from "express";
import { getAllCards } from "./controllers/cards.controller.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use("/cards", getAllCards);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
