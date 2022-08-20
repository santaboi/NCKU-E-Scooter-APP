//http://luffy.ee.ncku.edu.tw:8089/app.html
const express = require("express");
const cors = require("cors");
const app = express();



var corsOptions = {
    origin: "http://localhost:8081"
};


//use static html file
app.use(express.static('../../dist/parcel_app_new'))

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    try { 
        res.send("fuck2022");
        res.json({ message: "Welcome to bezkoder application." });
    } catch (e) {
        console.log("error")
    }

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
app.get('/table', (req, res) => {
    var fs = require('fs');
    var path = require('path');
    var jsonPath = './default.course.json';
    try {
        var data = fs.readFileSync(jsonPath, 'utf8'); //typeof data : string
        var data_json = JSON.parse(data);
        console.log("start crawling")
        console.log(req.query.student_id)
        console.log("password:#############")
        //await new Promise(r => setTimeout(r, 2000));
        console.log("input success...")
        console.log("login success......")
        console.log("enter course page success...")
        console.log(data_json)
        
    } catch (e) {
        console.log('Error:', e.stack);
    }
})


require("./app/routes/routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});