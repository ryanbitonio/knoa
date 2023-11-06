import { HttpGetAllGuests } from "../controllers/guests.controller.js";
import express from "express";

const guestsRouter = express.Router();

guestsRouter.use("/", HttpGetAllGuests);

export default guestsRouter;
