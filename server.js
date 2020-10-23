const express = require('express')
const hbs = require('hbs')
const app = express()

app.use(express.static(__dirname + '/views'))

/*app.get('/home',(req, res) => {
    res.render(__dirname + '/views/Homepage.hbs')
})*/
app.use(time=(req,res,next)=>{
    const date =new Date();
    console.log(date);
    if (date.getDay() !== 0 && date.getDay() !== 6 && date.getHours()>=9 && date.getHours()<=17) {next()}
    else {res.send("The web application is only available in working time (Monday to Friday,  from 9 to 17) ")}
})

app.set('view engine', hbs)

app.get("/Homepage",(req,res)=>{

    res.render("Homepage.hbs")

})

app.get("/ourservices",(req,res)=>{
    res.render("OurServices.hbs")
})
app.get("/Contact",(req,res)=>{
    res.render("ContactUs.hbs")
})




app.listen(3000,(err)=>{
    if(err) console.log("server is not running")
    else console.log("server is runnig on porrt 3000")
})