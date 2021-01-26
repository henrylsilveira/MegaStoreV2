module.exports = {
    logout(req, res) {
        req.session.destroy()
        return res.redirect("/")
    },
    loginForm(req, res) {
        return res.render("session/index")
    }
}