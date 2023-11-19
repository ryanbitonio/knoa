import guests from "./guests.mongo.js";

export async function getAllGuests() {
  return await guests.find({});
}

export async function addGuest(data) {
  try {
    return await guests.create(data);
  } catch (error) {
    console.log(error);
  }
}
