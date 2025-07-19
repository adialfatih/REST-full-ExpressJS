const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

module.exports = function (req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-api-key');
  }
  next();
};
