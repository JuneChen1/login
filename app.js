const express = require('express')
const app = express()
const port = 3000

const session = require('express-session')
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  name: 'user'
}))

const routes = require('./routes')
app.use(routes)

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Express is running on https://localhost:${port}`)
})
