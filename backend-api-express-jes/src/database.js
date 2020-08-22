const mongoose = require('mongoose');

const url = `mongodb://localhost/mern-jes`;

mongoose.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Conexion a la base de datos exitosa'))       
    .catch(err => console.log(err));

module.exports = mongoose;
