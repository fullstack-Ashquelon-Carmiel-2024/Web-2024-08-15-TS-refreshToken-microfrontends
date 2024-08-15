const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/db');

const { authRouter, sportRouter, userRouter } 
                           = require('./routes/index');

require('./model/index');

const app = express();

const PORT = process.env.PORT || 3333;

/******** MIDDLEWARE **********/

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
    cors({
    origin: ['http://localhost:5174','http://localhost:3003','https://class.leonardoschool.co.il','https://www.class.leonardoschool.co.il'],
    methods: ['GET', 'POST','GET'],
    credentials: true,
    })
 );

/******** ROUTES **********/

app.use('/api/auth',authRouter);
app.use('/api/sports',sportRouter);
app.use('/api/users',userRouter);

app.get('/', (req, res) => {
    res.send('<h1>I am Olympics API</h1>');
});

app.listen(PORT, (error) =>{
    if(error){
        console.log(`Error ${error}`);
    }
    console.log(`listening on port ${PORT}`)
});

