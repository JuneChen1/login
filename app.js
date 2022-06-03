const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const bodyParser = require('./node_modules/body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const verifyUsers = require('./verifyUsers')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const user = verifyUsers(req.body.email, req.body.password)
  if (user) {
    res.render('welcome', { name: user.firstName })
  } else {
    res.render('index', { error: 'The email or password is incorrect'})
  }
})

app.listen(port, () => {
  console.log(`Express is running on https://localhost:${port}`)
})
