import ImageKit from "@imagekit/nodejs";
import config from "../config/config.js";

const client = new ImageKit({
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

/**
 * Uploads an image buffer to ImageKit.
 * @param {Buffer} buffer - The raw file buffer from multer (req.file.buffer)
 * @param {string} originalName - The original file name (req.file.originalname)
 * @returns {Promise<object>} ImageKit upload result (includes .url)
 */
const uploadImage = async (buffer, originalName = "image.jpg") => {
    const result = await client.upload({
        file: buffer.toString("base64"),
        fileName: `${Date.now()}-${originalName}`,
        folder: "projects",
    });

    return result;
};

export default uploadImage;