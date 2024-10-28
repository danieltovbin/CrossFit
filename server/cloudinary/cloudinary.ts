import cloudinary from "../config/configCloudinary";

export const uploadImage = async (
  imgUrl: string,
  folder: string,
  transformations: object = {}
) => {
  try {
    const result = await cloudinary.uploader.upload(imgUrl, {
      folder,
      use_filename: true,
      unique_filename: false,
      ...transformations,
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

export const CLOUDINARY_IMAGE_CONFIG = {
  crop: "fill",
  fetch_format: "auto",
  quality: "auto",
};
