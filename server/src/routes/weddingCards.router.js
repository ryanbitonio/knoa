import { getAllWeddingCards } from "../controllers/weddingCards.controller.js";
import express from "express";

const weddingCardsRouter = express.Router();

weddingCardsRouter.use("/", getAllWeddingCards);

export default weddingCardsRouter;
