import cards from "../models/weddingCards.model.js";

export const getAllWeddingCards = (req, res) => {
  res.json(cards);
};
