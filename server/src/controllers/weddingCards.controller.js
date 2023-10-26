import { getAllWeddingCards } from "../models/weddingCards.model.js";

export const HttpGetAllWeddingCards = async (req, res) => {
  const result = await getAllWeddingCards();
  await res.json(result);
};
