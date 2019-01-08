//Html Routes first we require path

const path = require('path');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/tables.html'));
    });

    app.get('/reservations', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/reservations.html'));
    });


};