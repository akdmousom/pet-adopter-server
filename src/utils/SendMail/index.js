const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shaharulsiyam0273@gmail.com',
        pass: 'rfmdmchofhjsfenx',
    },
})
const mailSend = async (mailData) => {
    const mailOptions = {
        from: mailData.sender,
        to: mailData.receiver,
        subject: mailData.subject,
        html: mailData.msg,
    };
    const info = await transporter.sendMail(mailOptions)
    // console.log(info)
}
module.exports = mailSend