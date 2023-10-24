import app from "./app.js";
import cardsRouter from "./routes/cards.router.js";

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/cards", cardsRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
