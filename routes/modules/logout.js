const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  req.session.destroy(() => {
    console.log('destroy session')
  })
  res.redirect('/')
})

module.exports = router
