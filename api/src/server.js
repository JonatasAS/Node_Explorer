const express = require('express');

const app = express();


app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`ID do usuário: ${id}. Nome do usuário: ${user}.`);
})

app.get("/users", (request, response) => {
  const { page, limit } = request.query
  response.send(`Página: ${page}. Monstar: ${limit}`);
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));