let tableList = require('../data/table-list.js');
let waitingList = require('../data/waiting-list.js');
    //exporting our api routes, we pass in app as the argument
module.exports = function (app) {
    //get the tablelist and display it as json
    app.get('/api/tables', function (req, res) {

        res.json(tableList);

    });
    //get the waitinglist and display it as json
    app.get('/api/waitinglist', function (req, res) {
        res.json(waitingList);
    });
    //post new reservations to the table. If there are fewer than 5 
    //reservations post to tablelist, else post to waitinglist
    app.post('/api/tables', function ( req, res){
        if(tableList.length < 5){
            tableList.push(req.body);
        }else{
            waitingList.push(req.body);
        }
        res.end();
    });

}