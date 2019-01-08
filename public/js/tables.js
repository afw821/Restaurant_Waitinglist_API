$(function(){


    //Render the reservation data to the appropriate part of the page.
    //The first parameter is the array of reservations to render.
    //The second parameter is the parent element to append to (.tables or .waitlist).
   
    const render = function (dataList, parent){
        //loop through the dataList 
        for(let i = 0; i < dataList.length; i ++){
            //set a variable to add class of box the div to hold reservations
            const reservation = $('<div>').addClass('box');
            //append the info in the data list to the reservation box
            reservation.append(`<h2>${dataList[i].customerName}</h2>`);
            reservation.append(`<p>${dataList[i].customerEmail}</p>`);
            reservation.append(`<p>${dataList[i].customerPhone}</p>`);
            //append reservation to parent element(div with class .tables)
            parent.append(reservation);
        }
    }

});