//Declaring Required packages
var express				=	require('express');
var app 			= express(),
    path			= require('path'),
    bodyParser 		= require('body-parser');


// port configuration
var port		=	process.env.PORT || 4000;

// requiring routes
var basicRoutes	=	require('./routes/basicroutes');
	//userRoutes  = 	require('./routes/user');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', basicRoutes);

//Deploying
app.listen(port, function() {
	console.log('Server online at port ' + port);
});