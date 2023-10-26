import express from "express";
import weddingCardsRouter from "./routes/weddingCards.router.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
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

app.use("/wedding-cards", weddingCardsRouter);

export default app;
