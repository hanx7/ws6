const express = require('express');
const app = express();

//router
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
//
// app.get('/api/courses', function (req, res) {
//   res.send([1,2,3]);
// })
//
// app.get('/api/courses/:id', function (req, res) {
//   res.send(req.params.id);
// })

//EXEMPLE 2
const authorRouter = require('./routes/authorRouter')
//get home page
app.get('/', (req, res) => {
  res.send('<h1>Library System</h1>')
})
app.use('/author-management', authorRouter)

app.listen(8000, () => console.log('Listening on port 8000..'))

//http://expressjs.com/en/5x/api.html#req
// app.post();
// app.put();
// app.delete();
