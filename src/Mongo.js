const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ahgase2410:<pass1234>@salescout.4v8thgy.mongodb.net/")
    .then(r =>{
        console.log("mongodb connected");
    })
    .catch(()=>{
        console.log('mongodb disconnected');
    })
