import express from "express";
import guestsRouter from "./routes/guests.router.js";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

const app = express();

app.use(
  cors({
    origin: process.env.PROD_KNOA_CLIENT || "http://localhost:5173",
  })
);

app.use(helmet());

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/guests", guestsRouter);

export default app;
