const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/client/public')))

app.use(cors())

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/ping', cors(), async (req, res, next) => {
 return res.send('pong');
});

app.post('/api/scripts', function (req, res) {
  console.log('got request ' + req.statusCode)
  console.log(typeof req.body)
  console.log(req.method)
  console.log(req.headers)
  console.log(req.headers['content-type'])
  var text = 'Please work!'
  res.json(text)
});

app.get('/ruby', function(req, res) {
  const exec = require('child_process').exec
  const input = 'processed_input'
  const output = 'processed_output'
  exec(`ruby ./server/src/script.rb ${input} ${output}`, function (error, stdout, stderr) {
    return res.send(stdout)
  })
})

app.listen(process.env.PORT || 8080, () => {
  console.log('CORS-enabled web server listening on port 8080 | HELLO SALLY!')
});
