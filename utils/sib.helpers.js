const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});

const SibApiV3Sdk = require('sib-api-v3-sdk');
// const defaultClient = SibApiV3Sdk.ApiClient.instance;
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const moment = require('moment');

// Configure API key authorization: api-key
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SIBKEY;

// Configure API key authorization: partner-key
let partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = process.env.SIBKEY;

// send contact form submitted
function sendContactForm (name, email, subject, phone, message) {
    const apiInstance = new SibApiV3Sdk.SMTPApi();
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.sender = {
        name: 'Greenscapes Gardening Sevices',
        email: 'support@ewalletbooster.com'
    }
    sendSmtpEmail.to = [
        { email: email, name: name }, 
        { name: 'Greenscapes Gardening', email: 'simon@greenscapes-gardening.co.uk' }
    ];
    sendSmtpEmail.replyTo = { email: email };
    sendSmtpEmail.templateId = 1;
    sendSmtpEmail.tags = ['support'];
    sendSmtpEmail.params = {
        FIRSTNAME: name,
        MESSAGE: message
    }
    apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(res => console.log(res))
    .catch(e => console.log(e))
}