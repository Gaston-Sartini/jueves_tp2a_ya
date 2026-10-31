import AppError from '../errors/AppError.js';

const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        const body = {
            code: err.code,
            message: err.message
        };
        if (err.details) {
            body.details = err.details;
        }
        res.status(err.statusCode).json({error: body});
    } else {
        console.error(err);
        res.status(500).json({error: {code: "INTERNAL_ERROR", message: "An unexpected error occurred"}});
    }
};

export default errorHandler;