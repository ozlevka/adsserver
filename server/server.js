var express = require('express');



var app = express();

app.configure(function()
{
 	app.use(express.bodyParser());
	app.use(express.cookieParser());   
});



app.listen(8000);
console.log('Server started and listen to 8000')