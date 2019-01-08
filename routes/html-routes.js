//Html Routes first we require path

const path = require('path');

module.exports = function (app) {
    //get homepahe with /
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    //get tables with /tables url
    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/tables.html'));
    });
    //get reservations with /reservations
    app.get('/reservations', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/reservations.html'));
    });


};