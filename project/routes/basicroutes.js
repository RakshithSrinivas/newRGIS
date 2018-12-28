// requring packages
var express		=	require('express'),
	router		=	express.Router();
	// passport 	= 	require('passport'),
	// User 		= 	require('../models/user'),
	// async		=	require('async'),
	// nodemailer 	=	require('nodemailer'),
	// crypto 		=	require('crypto'),
	// middleware  = 	require('../middleware');

// render the landing page
router.get('/', function(req, res) {
	res.render('landing');
});

module.exports	=	router;