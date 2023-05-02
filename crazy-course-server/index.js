const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const courses = require("./Data/Courses.json")

app.get('/',(req,res)=>{
    res.send('crazy server is running')
})
app.get("/courses",(req,res)=>{
 res.send(courses);
})

app.listen(port,()=>{
    console.log('crazy course server is running on ', port);
})