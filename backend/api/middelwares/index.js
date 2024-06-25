const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

function checkAuth(req, res, next) {
  // Si la petición no tiene la información del token en un campo 'authorization' dentro de sus headers,
  // rechazamos la petición y no continuamos
  if (!req.headers.authorization)
    return res.status(401).send("Token not found");

  // Comprobamos la vericidad del token
  jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    async (err, result) => {
      // si 'err' es true, el token no es válido (token caducado, mal formateado, etc)
      if (err) return res.status(401).send("Token not valid");

      // Si hemos llegado hasta aquí, el token ha sido desencriptado correctamente, y podemos acceder al
      // valor del email del usuario, ya que lo empleamos para generar el payload del token en el momento
      // de crearlo.
      const user = await User.findOne({ where: { email: result.email } });
      if (!user) return res.status(401).send("Token not valid");

      // Guardamos la información del usuario en res.locals (esta información permanecerá ahí mientras
      // la petición se esté ejecutando. En el momento en el que la petición devuelva una respuesta, esta información se pierde)
      res.locals.user = user;

      // Ejecutamos next() para que el middleware permita continuar con la petición,
      // ejecutando la siguiente función 'en la cola'
      next();
    }
  );
}

function checkAdmin(req, res, next) {
  // Vamos a revisar si el usuario autenticado tiene el rol de administrador.
  // Lo haremos accediendo a res.locals y comprobaremos el role.
  // Si no es admin, rechazamos la petición y no permitimos continuar

  if (res.locals.user.role !== "admin") {
    return res.status(401).send("User not authorized");
  }

  // Si va todo bien, seguimos adelante con la petición
  next();
}

function checkDoctor(req, res, next) {
  // Vamos a revisar si el usuario autenticado tiene el rol de Doctor.
  // Lo haremos accediendo a res.locals y comprobaremos el role.
  // Si no es Doctor, rechazamos la petición y no permitimos continuar

  console.log(res.locals.user);
  if (res.locals.user.role !== "doctor") {
    return res.status(401).send("User not authorized");
  }

  // Si va todo bien, seguimos adelante con la petición
  next();
}

module.exports = {
  checkAuth,
  checkAdmin,
  checkDoctor,
};
