module.exports = function errorHardware(err, req, res, next) {
  console.error(err);
  res.status(500).send('Qualcosa è andato storto');
}