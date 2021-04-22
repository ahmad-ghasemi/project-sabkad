const express = require('express');
const  Pool =require('./db/connection');
const app = express();
const port = 3000;
const router=express.Router();
const routes=require('./routes/index');
app.use('/Api',routes(router));
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

app.get("/",(req,res) => {
  Pool.getConnection((err, connection) => {
      if(err) throw err;
      console.log('connected as id ' + connection.threadId);
      connection.query('SELECT * from tblpersonal LIMIT 1', 
      (err, rows) => {
          connection.release(); // return the connection to pool

          if(err) throw err;
          console.log('The data from users table are: \n', rows);
          res.json(rows)
      });
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})