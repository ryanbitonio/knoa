import mongoose from "mongoose";
import "dotenv/config";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", err => {
  console.error(err);
});

export async function mongoConnect() {
  await mongoose.connect(
    process.env.PROD_MONGODB_URI || process.env.DEV_MONGODB_URI
  );
}

export async function mongoDisconnect() {
  await mongoose.disconnect();
}
