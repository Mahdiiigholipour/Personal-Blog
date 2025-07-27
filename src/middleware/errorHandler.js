function notfoundHandler(req, res, next) {
  res.status(404).render("404.ejs", { url: req?.url });
}

function exceptionHandler(err, req, res, next) {
  console.log(err.stack);

  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).render("500.ejs", {
    status,
    message,
  });
}

module.exports = { notfoundHandler, exceptionHandler };
