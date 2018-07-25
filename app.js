const express = require('express')
const app = express()
const router = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const DB_URL = 'mongodb://localhost/AutoService'
mongoose.connect(DB_URL, function (err) {
  if (err) {
    console.error('Mongo connection FAIL: ' + err)
  } else {
    console.log('Mongo connection OK')
  }
})


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     if (req.method === 'Options') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
//         return res.status(200).json({});
//     } else { next(); }
// });
app.use(cors())
app.use(express.json())
app.use(router)

module.exports = app