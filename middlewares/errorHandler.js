import AppError from "../errors/AppError.js";
function errorHandler(err, req, res, next) {
  console.error(err);
  if (err instanceof AppError) {
    res
      .status(err.statusCode)
      .json({ err: err.errorCode, message: err.message });
  } else {
    console.log({ message: err.message });
    res.status(500).json({ err: "Internal Server Error" });
  }
}

export default errorHandler;
