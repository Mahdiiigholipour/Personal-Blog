function notfoundHandler(req, res, next) {
  res.status(404).json({
    message: "not found route",
  });
}

function exceptionHandler(req, res, next) {
  let status = err?.status ?? err?.statusCode ?? err?.code;
  if (!status || isNaN(+status) || status > 511 || status < 200) status = 500;

  res.status(status).json({
    message: err?.message ?? err?.msg ?? err?.stack ?? "internal server error",
  });
}

module.exports = { notfoundHandler, exceptionHandler };
