import cards from "./weddingCards.mongo.js";

export async function getAllWeddingCards() {
  return await cards.find({});
}
