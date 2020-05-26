webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/sib.helpers.js":
/*!******************************!*\
  !*** ./utils/sib.helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const path = require('path');
// require('dotenv').config({path: path.join(__dirname, '../.env')});
var SibApiV3Sdk = __webpack_require__(/*! sib-api-v3-sdk */ "./node_modules/sib-api-v3-sdk/src/index.js"); // console.log(SibApiV3Sdk.ApiClient.instance)


var defaultClient = SibApiV3Sdk.ApiClient.instance; // const moment = require('moment');
// Configure API key authorization: api-key

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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'; // // // Configure API key authorization: partner-key
// let partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = process.env.SIBKEY;
// // send contact form submitted

function sendContactForm(name, email, subject, phone, message) {
  var apiInstance = new SibApiV3Sdk.SMTPApi();
  var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = {
    name: 'Greenscapes Gardening Sevices',
    email: 'simon@greenscapes-gardening.co.uk'
  };
  sendSmtpEmail.to = [{
    email: email,
    name: name
  }, {
    name: 'Greenscapes Gardening',
    email: 'simon@greenscapes-gardening.co.uk'
  }];
  sendSmtpEmail.replyTo = {
    email: email
  };
  sendSmtpEmail.templateId = 1;
  sendSmtpEmail.tags = ['support'];
  sendSmtpEmail.params = {
    FIRSTNAME: name,
    MESSAGE: message,
    PHONE: phone,
    EMAIL: email
  };
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (res) {
    return console.log(res);
  })["catch"](function (e) {
    return console.log(e);
  });
} // create new contact


function createNewContact(name, email, subject, phone, message) {
  var apiInstance = new SibApiV3Sdk.ContactsApi();
  var createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.attributes = {
    FIRSTNAME: name,
    PHONENUMBER: phone
  };
  createContact.listIds = [3];
  apiInstance.createContact(createContact).then(function () {
    return {
      success: true,
      msg: 'User added'
    };
  })["catch"](function (e) {
    return console.log(e);
  });
}

module.exports = {
  sendContactForm: sendContactForm,
  createNewContact: createNewContact
};

/***/ })

})
//# sourceMappingURL=index.js.a2e885f6ef45835041f0.hot-update.js.map