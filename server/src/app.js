import express from "express";
import guestsRouter from "./routes/guests.router.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

const ORIGIN = "http://localhost:5173" || process.env.PROD_KNOA_CLIENT;

app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
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
