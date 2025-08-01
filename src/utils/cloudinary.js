// src/utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath) => {
  if (!filePath) return null;
  const result = await cloudinary.uploader.upload(filePath);
  fs.unlinkSync(filePath); // remove local file after upload
  return result;
};
