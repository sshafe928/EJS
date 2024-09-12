var express = require('express')
var app = express()
const PORT = 5000

//imported data
const peopleData = require('./data/people')

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    let judgement= 'nerds will inherit the earth'
    res.render('pages/index',{
        people:peopleData,
        tagline: judgement,
    })
})

// about page
app.get('/about', function(req, res){
    res.render('pages/about')
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})