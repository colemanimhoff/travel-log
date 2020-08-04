const notFoundErrorHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const defaultErrorHandler = (error, req, res, next) => { //eslint-disable-line
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'stack hidden in production' : error.stack,
  });
};

module.exports = {
  notFoundErrorHandler,
  defaultErrorHandler,
};
