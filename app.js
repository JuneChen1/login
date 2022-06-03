const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const bodyParser = require('./node_modules/body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const email = req.body.email
  console.log('email', email)
})

app.listen(port, () => {
  console.log(`Express is running on https://localhost:${port}`)
})
