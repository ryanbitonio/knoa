import { HttpGetAllWeddingCards } from "../controllers/weddingCards.controller.js";
import express from "express";

const weddingCardsRouter = express.Router();

weddingCardsRouter.use("/", HttpGetAllWeddingCards);

export default weddingCardsRouter;
