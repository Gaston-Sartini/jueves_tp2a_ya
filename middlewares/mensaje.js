export function mensaje(req, res, next) {
  req.mensaje = "hola mundo";
  next();
}