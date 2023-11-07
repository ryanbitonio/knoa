import guests from "./guests.mongo.js";

export async function getAllGuests() {
  return await guests.find({});
}

export async function addGuest(data) {
  return await guests.create(data);
}
