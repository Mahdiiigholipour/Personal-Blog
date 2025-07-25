function notfoundHandler(req, res, next) {
  res.status(404).json({
    message: "not found route",
  });
}

function exceptionHandler(err, req, res, next) {
  console.log(err.stack);

  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).render("500", {
    status,
    message,
  });
}

module.exports = { notfoundHandler, exceptionHandler };
