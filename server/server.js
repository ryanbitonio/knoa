import dotenv from "dotenv/config";

import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const cards = [
  {
    id: 1,
    name: "Together",
    price: 100.0,
    sizes: { small: "4x6", standard: "5x7", large: "6x8" },
  },
  {
    id: 2,
    name: "New Beginnings",
    price: 200.0,
    sizes: { small: "4x6", standard: "5x7", large: "6x8" },
  },
  {
    id: 3,
    name: "Adventure",
    price: 300.0,
    sizes: { small: "4x6", standard: "5x7", large: "6x8" },
  },
  {
    id: 4,
    name: "Celebration",
    price: 400.0,
    sizes: { small: "4x6", standard: "5x7", large: "6x8" },
  },
  {
    id: 5,
    name: "Milestone",
    price: 500.0,
    sizes: { small: "4x6", standard: "5x7", large: "6x8" },
  },
];

app.use("/cards", (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
