const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');

const PORT = 3000;

//body-parser middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//server creation
app.listen(PORT, function(){
    console.log('server is running on port', PORT);
});

//MongoDB connection
mongoose.connect('mongodb://localhost/jwtauth',{ useNewUrlParser: true });

//status checking
app.get('/checking', function(req, res){
    res.json({
        "message": "checking the node express jwt app" 
    })
})

//route
app.use('/user', user);
