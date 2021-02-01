module.exports = {
    logout(req, res) {
        req.session.destroy()
        return res.redirect("/")
    },
    login(req, res){
        console.log(req.user)
        req.session.userId = req.user.id
        return res.redirect("/users")
    },
    loginForm(req, res) {
        return res.render("session/login")
    },
    forgotForm(req, res) {
        return res.render("session/forgot-password")
    },
    forgot(req, res) {
        // Token para o usuário

        // Criar uma validade pro token

        // Enviar um email com um link de recuperação

        // Avisar ao usuário que enviou o email
    }
}