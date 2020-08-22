const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');

const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 8888)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


app.use(cors({origin: 'http://localhost:3000'}));
// Routes
app.use('/api/fiscalia', require('./routes/task.routes'));

// Starting the server 
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});

