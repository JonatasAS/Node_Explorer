class UsersController {
    /* 
    Metodos
    index - GET para listar varios registros.
    show - GET para exibir um registro especifico.
    create - POST para criar um registro.
    update - PUT para atualizar um registro.
    delete - DELETE para remover um registro.
     */

    create(request, response) {
        const { name, email, password } = request.body;
        /* response.send(`Usuário: ${name} E-mail: ${email} Senha: ${password}` ); */
        response.json({ name, email, password });
    }
}

module.export = UsersController