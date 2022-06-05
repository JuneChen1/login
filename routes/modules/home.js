const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.session)
  if (req.session.user) {
    res.render('welcome', { name: req.session.user })
  } else {
    res.render('index')
  }
})

module.exports = router
