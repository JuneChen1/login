const express = require('express')
const router = express.Router()
const verifyUsers = require('../../verifyUsers')

const bodyParser = require('../../node_modules/body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  const user = verifyUsers(req.body.email, req.body.password)
  if (user) {
    res.render('welcome', { name: user.firstName })
    req.session.user = user.firstName
    console.log(req.session)
  } else {
    res.render('index', { error: 'The email or password is incorrect', email: req.body.email })
  }
})

module.exports = router
