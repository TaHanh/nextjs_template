const next = require('next')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const routes = require('./src/routes/contant')
const apiRoutes = require('./src/routes/api-routes')
const userRoutes = require('./src/api/user')
const handler = routes.getRequestHandler(app)
const handle = app.getRequestHandler()

const express = require('express')
const bodyParser = require('body-parser')


app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  // Allows for cross origin domain request:
  server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  server.use('/api', apiRoutes)
  server.use('/api/user', userRoutes)
  server.use(handler)

  // Server-side
  // const route = pathMatch()

  // server.get('/search', (req, res) => {
  //   return app.render(req, res, '/', req.query)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('Server ready on http://localhost:3000')
  })
})
