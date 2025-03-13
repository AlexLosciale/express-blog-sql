module.exports = function notFound(req, res, next) {
  res.status(404).send('Pagina non trovata');
}