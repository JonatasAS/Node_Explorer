const { Router } = require("express")

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body;
  /* response.send(`Usuário: ${name} E-mail: ${email} Senha: ${password}` ); */
  response.json({ name, email, password });
});

module.exports = usersRoutes;