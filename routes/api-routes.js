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

    
    //Clear the tableList. 
   // Move up to five reservations to the tableList from the waitingList
   
//   app.delete('/api/all', function (req, res) {
//     tableList = [];
    
//     const toMove = Math.min(5, waitingList.length);

//     for (let i = 0; i < toMove; i++){
//       tableList.push(waitingList[i]);
//       waitingList.splice(i, 1); //remove element from waitingList
//     }

//     res.end();
//   });

app.delete('/api/all', function (req, res){
    //set an empty tableList array
    tableList = [];
    //math.min returns the lowest value put into it
    const toMove = Math.min(5, waitingList.length);
    //A for loop to loop through to Move
    //Push waiting list items to the table list
    //splice the waitinglist array to remove element from it
    for(let i = 0; i < toMove; i ++){
        tableList.push(waitingList[i]);
    }


});

}