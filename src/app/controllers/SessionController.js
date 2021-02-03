const crypto = require('crypto')
const mailer = require('../../lib/mailer')

const User = require('../models/User')

module.exports = {
    logout(req, res) {
        req.session.destroy()
        return res.redirect("/")
    },
    login(req, res) {
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
    async forgot(req, res) {
        const user = req.user

        try {

            // Token para o usuário
            const token = crypto.randomBytes(20).toString("hex")
            // Criar uma validade pro token
            let now = new Date()
            now = now.setHours(now.getHours() + 1)

            await User.update(user.id, {
                reset_token: token,
                reset_token_expires: now
            })
            // Enviar um email com um link de recuperação
            await mailer.sendMail({
                to: user.email,
                from: 'no-reply@LaunchStore.com.br',
                subject: 'Recuperação de senha',
                html: `<h2>Perdeu a chave?</h2>
            <p>Não se preocupe, clique no link abaixo para recuperar sua senha</p>
            <p>
                <a href="http://localhost:3000/users/password-reset?token${token}" target="_blank">
                RECUPERAR SENHA
                </a>
            </p>
            `
            })

            // Avisar ao usuário que enviou o email
            return res.render("session/forgot-password", {
                success: "Verifique seu email para resetar sua senha!"
            })

        } catch (err) {
            console.error(err)
            return res.render("session/forgot-password", {
                error: "Erro inesperado, tente novamente!"
            })
        }


    }
}