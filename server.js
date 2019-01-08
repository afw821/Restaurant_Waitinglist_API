 // Imports express into our app and sets it up for use
const express = require ('express');
const path = require('path');

//starts out server
const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3030;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Require API routes and html routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

//sets up the post to listen and console logs the port to our console
app.listen(PORT, function(){
    console.log(`App is now listening on PORT: ${PORT}`);
})


