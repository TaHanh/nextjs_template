// import { MongoClient } from 'mongodb'

// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// export async function setUpDb(db) {
//   await db.collection('tokens').createIndex('expireAt', { expireAfterSeconds: 0 })
// }

// async function database(req, res, next) {
//   if (!client.isConnected()) await client.connect()
//   req.dbClient = client
//   req.db = client.db(process.env.DB_NAME)
//   await setUpDb(req.db)
//   return next()
// }

// const middleware = nextConnect()

// middleware.use(database)

// export default middleware

// const mongoose = require('mongoose')
// const config = require('../config')

// mongoose.connect(config.host.DB, { useNewUrlParser: true }).then(
//   () => {
//     console.log('Database is connected')
//   },
//   (err) => {
//     console.log('Can not connect to the database' + err)
//   }
// )

// module.exports = mongoose
