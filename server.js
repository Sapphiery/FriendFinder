var express = require('express');
var path = require('path');
var friends = require('./app/data/friends.js');

var PORT = process.env.PORT || 8080;

var app = express();

require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Listening on ' + PORT);
});