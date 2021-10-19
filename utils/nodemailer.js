const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const dayjs = require('dayjs');
const nodemailer = require('nodemailer');
const nodeMailerPass = process.env.nodeMailerPass;
const nodeMailerUser = process.env.nodeMailerUser;
const axios = require('axios');
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true, //ssl
    auth: {
        user: nodeMailerUser,
        pass: nodeMailerPass,
    },
});

// // send contact form submitted
async function sendContactForm(req, res, next) {
    const date = dayjs().format('DD/MM/YYYY');
    const { name, email, phone, subject, message } = req.body;
    let mailOptions = {
        // from: nodeMailerUser, // sender address (who sends)
        from: {
            // from using address object
            name: 'Greenscapes Gardening',
            address: nodeMailerUser,
        },
        to: email, // list of receivers (who receives)
        cc: nodeMailerUser,
        subject: `We have received your enquiry`, // Subject line
        replyTo: email,
        html: `<b>Date: ${date}</b> <p>Hi ${name}</p> <p>Thanks for getting in touch.</p> <p>We have received your message below and will be in contact very soon.</p> <p>Email: ${email}</p> <p>Name: ${name}</p> <p>Phone: ${phone}</p> <p>Message: ${message}</p>`, // html body
    };

    return transporter
        .sendMail(mailOptions)
        .then((email) => {
            // console.log('here',email)
            if (email.rejected.length > 0)
                throw { status: 404, message: 'Rejected' };
            return res
                .status(201)
                .send({ success: true, msg: 'Enquiry submitted' });
        })
        .catch((err) => {
            // console.log('err1', err)
            if (err.status === 404) return next(err);
            else return next({ status: 500, message: 'server error' });
        });
}

async function verifyCaptcha(req, res, next) {
    try {
        const google = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${req.body['g-recaptcha-response']}`
        );
        if (google.data.success)
            return res.status(200).json({ success: google.data.success });
        else
            return res.status(500).json({
                msg: 'Server error: Please contact support',
            });
    } catch (error) {
        return res.status(500).json({
            msg: 'Server error: Please contact support',
        });
    }
}

module.exports = {
    sendContactForm,
    verifyCaptcha,
};
