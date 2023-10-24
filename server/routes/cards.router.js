import { getAllCards } from "../controllers/cards.controller.js";
import express from "express";

const cardsRouter = express.Router();

cardsRouter.use("/", getAllCards);

export default cardsRouter;
