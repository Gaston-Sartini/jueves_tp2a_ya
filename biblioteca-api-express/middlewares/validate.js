import AppError from "../errors/AppError.js";

function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if(!result.success) {
            const details = result.error.issues.map((issue) => {
                const field = issue.path.join(".");
                const message = issue.message;
                return { field, message };
            });
            return next(new AppError("VALIDATION_ERROR", "Invalid data", 400, details));
        }            
        req.body = result.data;
        next();
    }
};

function validateQuery(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.query);

        if(!result.success) {
            const details = result.error.issues.map((issue) => {
                const field = issue.path.join(".");
                const message = issue.message;
                return { field, message };
            });
            return next(new AppError("VALIDATION_ERROR", "Invalid query parameters", 400, details));
        }
        req.pagination = result.data;
        next();
    }
};

export default validate;
export { validateQuery };