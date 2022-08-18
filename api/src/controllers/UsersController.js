class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;
        /* response.send(`Usuário: ${name} E-mail: ${email} Senha: ${password}` ); */
        response.status(201).json({ name, email, password });
    }
}

module.exports = UsersController;