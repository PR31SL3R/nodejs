const express = require("express"); //imports and saves variable
const app = express(); // instantiates server

/*
Create a new server. That should contain routes that give you:

The time
The day
The month
*/

let dateObj = new Date();
const seconds = dateObj.getSeconds();
const minutes = dateObj.getMinutes();
const hours = dateObj.getHours(); 

const time = (hours+":"+minutes+":"+seconds)

let weekday = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";

let dayOfWeek = weekday[dateObj.getDay()];

//------------------------------------------//

let mapMonth = new Array(7);
mapMonth[0] = "January";
mapMonth[1] = "February";
mapMonth[2] = "March";
mapMonth[3] = "April";
mapMonth[4] = "May";
mapMonth[5] = "June";
mapMonth[6] = "July";
mapMonth[7] = "August";
mapMonth[8] = "September";
mapMonth[9] = "October";
mapMonth[10] = "November";
mapMonth[11] = "December";

let monthOfYear = mapMonth[dateObj.getMonth()];

//-------------------------------------------//

app.get("/getTime", (req, res) => {
    

    res.send({
        time
    });
})

app.get("/getDay", (req, res) => {

    res.send({
        dayOfWeek
    });
})

app.get("/getMonth", (req, res) => {
  

    res.send({
        monthOfYear
    });
})

app.listen(9090, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("server is running on port", 9090)
});