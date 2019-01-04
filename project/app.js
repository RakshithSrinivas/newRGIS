//Declaring Required packages
var express				=	require('express');
var app 			= express(),
    path			= require('path'),
    sassm = require('node-sass-middleware');
    bodyParser 		= require('body-parser');


// port configuration
var port		=	process.env.PORT || 4000;

// requiring routes
var basicRoutes	=	require('./routes/basicroutes');
	//userRoutes  = 	require('./routes/user');

app.use(
     sassm({
         src: __dirname + '/public/scss', //where the sass files are 
         dest: __dirname + '/public/css', //where css should go
         debug: true, // obvious
         indentedSyntax: true,
         outputStyle: 'compressed',
         prefix: '/css'
     })
 );

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', basicRoutes);

//Deploying
app.listen(port, function() {
	console.log('Server online at port ' + port);
});