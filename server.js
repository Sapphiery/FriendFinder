var express = require('express');
var path = require('path');
var friends = require(path.join(__dirname, '/app/data/friends.js'));

var PORT = process.env.PORT || 8080;

var app = express();

require(path.join(__dirname, '/app/routing/apiRoutes.js'))(app,friends);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app,path);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Listening on ' + PORT);
});