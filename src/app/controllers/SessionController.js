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
    }
}