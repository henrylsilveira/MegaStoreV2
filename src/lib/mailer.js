const nodemailer = require('nodemailer')

// Usar o mailtrap.io

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a4ad0fb3e9fc56",
      pass: "1e6d779d42a655"
    }
});

