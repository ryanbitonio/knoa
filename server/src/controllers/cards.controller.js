import cards from "../models/cards.model.js";

export const getAllCards = (req, res) => {
  res.json(cards);
};
