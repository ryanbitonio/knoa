import {
  httpGetAllGuests,
  httpAddGuest,
} from "../controllers/guests.controller.js";
import express from "express";

const guestsRouter = express.Router();

guestsRouter.get("/", httpGetAllGuests);
guestsRouter.post("/", httpAddGuest);

export default guestsRouter;
