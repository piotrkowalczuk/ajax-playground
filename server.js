express = require('express');
http = require('http');

app = exports.app = express();
app.set('title', 'AJAX Playground');
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.use('/public/', express.static(__dirname + '/public'));
app.use(express.cookieParser());
app.use(express.cookieSession({secret: 'asdfsaf1231radfaf'}));


app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

require('./backend/api/default')(app);

server = http.createServer(app);

server.listen('8000', function(error, result) {
    if(error) {
        console.info(error);
    } else {
        console.info("Listening on port 8000.");
    }
});
