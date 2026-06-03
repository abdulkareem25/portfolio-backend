const errorHandler = (err, req, res, next) => {

    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid ID format";
    }

    // Duplicate key error
    if (err.code === 11000) {
        statusCode = 400;
        message = "Duplicate field value";
    }

    res.status(statusCode).json({
        success: false,
        message
    });

};

export default errorHandler;