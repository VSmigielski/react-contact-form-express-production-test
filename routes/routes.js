const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var school = req.body.school
    var phoneCC = req.body.phoneCC
    var phone = req.body.phone
    var email = req.body.email
    var message = req.body.message
    var content = `Name: ${name}\nSchool: ${school}\nPhone: +${phoneCC}${phone}\nEmail: ${email}\nMessage: ${message}`
  
    var mail = {
      from: name,
      to: 'nodereactemailtesting@gmail.com',  //Change to email address that you want to receive messages on
      subject: `New Message from ${name}`,
      text: content,
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })


module.exports = router;