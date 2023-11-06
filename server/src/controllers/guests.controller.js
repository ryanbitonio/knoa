import { getAllGuests } from "../models/guests.model.js";

export const HttpGetAllGuests = async (req, res) => {
  const result = await getAllGuests();
  await res.json(result);
};
