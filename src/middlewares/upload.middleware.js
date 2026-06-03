import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB limit
    },
    fileFilter: (_req, file, cb) => {
        const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only JPEG, PNG, WEBP, and GIF images are allowed"), false);
        }
    },
});

export default upload;
