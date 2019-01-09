$(function () {


    //Render the reservation data to the appropriate part of the page.
    //The first parameter is the array of reservations to render.
    //The second parameter is the parent element to append to (.tables or .waitlist).

    const render = function (dataList, parent) {
        //loop through the dataList 
        for (let i = 0; i < dataList.length; i++) {
            //set a variable to add class of box the div to hold reservations
            const reservation = $('<div>').addClass('box');
            //append the info in the data list to the reservation box
            reservation.append(`<h3>${dataList[i].customerName}</h3>`);
            reservation.append(`<p>${dataList[i].customerEmail}</p>`);
            reservation.append(`<p>${dataList[i].phoneNumber}</p>`);
            //append reservation to parent element(div with class .tables)
            parent.append(reservation);
        }
    }


    //GET all the tables from the server.
    //Then call render to render the data from above and 
    // render it to parent element $('.tables');

    const getTables = function () {
        //ajax call to get the information from the server
        $.ajax({
            method: 'GET',
            url: 'api/tables'
        }).then(function (data) {
            console.log('table data' + data);
            render(data, $('.tables'));
        });
    }

    /**
   * GET all the waitlist data from the server.
   * Then call render to render the data.
   */
    const getWaitList = function () {
        $.ajax({
            method: 'GET',
            url: 'api/waitinglist'
        }).then(function (data) {
            console.log('wait data' + data);
            render(data, $('.waitlist'));

        });
    }
    //function to clear
    const clearAll = function () {
        $.ajax({
            method: 'DELETE',
            url: 'api/all'
        }).then(function () {
            $('.tables').empty();
            $('.waitlist').empty();
            getTables();
            getWaitList();
        })
    }
    getTables();
    getWaitList();
    $('#clear').on('click', clearAll);
});