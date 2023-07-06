const express = require('express');
var nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {

	const { email, subject, text, code } = req.body;

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: 'jeral.sandeeptha1@gmail.com',
		  pass: 'jlibkiykvmphoeco'
		}
	});

	var mailOptions = {
		from: 'jeral.sandeeptha1@gmail.com',
		to: `${email}`,
		subject: `${subject}`,
		text: `${text}`,
		html: `${code}`
	};
	  
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		  res.status(200).json({
			email: {
				email, 
				subject, 
				text, 
				code
			}
		  });
		}
	});
	
})

module.exports = router;
