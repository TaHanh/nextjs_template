const express = require('express')
const router = express.Router()
// const request = require('request')

router.get('/search', (req, res) => {
  console.log('/search')
  // request('https://api.tvmaze.com/search/shows?q=batman', (error, response, body) => {
  //   if (!error && response.statusCode == 200) {
  //     res.json(body)
  //   }
  // })
})
router.post('/search', (req, res) => {
  console.log('/post', req.body.name)
  console.log('/post', req.params['name'])
})

module.exports = router
