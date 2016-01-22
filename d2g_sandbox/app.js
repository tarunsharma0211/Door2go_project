var express = require('express');        
var port     = process.env.PORT || 3000;
var path = require('path');
var fs = require('fs');
var flash    = require('connect-flash');
//var agent = require('./controllers/agent.js');
var bodyParser   = require('body-parser');
var cookieSession = require('cookie-session')
//var data = require('./database');
//var cookieSession = require('cookie-session');



var app = express();
/*var http = require('http').Server(app);*/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/externaljs',express.static(path.join(__dirname, '/externaljs')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(flash());
//app.use(express.session({secret: "This is a secret"}));
 

// database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');



fs.readdirSync('./controllers').forEach(function (file) {
          if(file.substr(-3) == '.js') {
              route = require('./controllers/' + file);
              route.controller(app);
          }
        });

//require('models/database.js')(app);

    // launch =====================================================================
app.listen(port);    
console.log('Module running on port ' + port);

/*app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});*/
