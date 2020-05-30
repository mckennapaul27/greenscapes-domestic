// const path = require('path');
// require('dotenv').config({path: path.join(__dirname, '../.env')});

const SibApiV3Sdk = require('sib-api-v3-sdk');
// console.log(SibApiV3Sdk.ApiClient.instance)
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// const moment = require('moment');

// Configure API key authorization: api-key
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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'

// // // Configure API key authorization: partner-key
// let partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = process.env.SIBKEY;

// // send contact form submitted
function sendContactForm (name, email, subject, phone, message) {
    const apiInstance = new SibApiV3Sdk.SMTPApi();
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.sender = {
        name: 'Greenscapes Gardening Sevices',
        email: 'simon@greenscapes-gardening.co.uk'
    }
    sendSmtpEmail.to = [
        { email: email, name: name }        
    ];
    sendSmtpEmail.bcc = [{
        email: 'simon@greenscapes-gardening.co.uk'
    }]
    sendSmtpEmail.replyTo = { email: email };
    sendSmtpEmail.templateId = 1;
    sendSmtpEmail.tags = ['support'];
    sendSmtpEmail.params = {
        FIRSTNAME: name,
        MESSAGE: message,
        PHONE: phone,
        EMAIL: email
    }
    apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(res => console.log(res))
    .catch(e => console.log(e))
}

// create new contact
function createNewContact (name, email, subject, phone, message) {
    const apiInstance = new SibApiV3Sdk.ContactsApi();
    let createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.attributes = {
        FIRSTNAME: name,
        PHONENUMBER: phone
    }
    createContact.listIds = [3];
    apiInstance.createContact(createContact)
    .then((res) => {
        console.log(res)
        return ({ success: true, msg: 'User added' })
    })
    .catch(e => console.log(e))
}

module.exports = {
    sendContactForm,
    createNewContact
}