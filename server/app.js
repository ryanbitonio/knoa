import express from "express";
import cardsRouter from "./routes/cards.router.js";

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/cards", cardsRouter);

app.use(express.json());

export default app;
