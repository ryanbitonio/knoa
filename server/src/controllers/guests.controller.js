import { getAllGuests, addGuest } from "../models/guests.model.js";

export const httpGetAllGuests = async (req, res) => {
  const result = await getAllGuests();
  await res.json(result);
};

export const httpAddGuest = async (req, res) => {
  const guestData = req.body;
  const result = await addGuest(guestData);
  await res.status(201).json(result);
};
