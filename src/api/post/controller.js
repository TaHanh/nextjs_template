const User = require('./model')
function getUser(req, res) {
  User.find()
    .then((user) => {
      console.log('user', user)
      res.json(user)
    })
    .catch((err) => {
      console.log('err', err)
      res.status(400).send('error api', err)
    })
}
function getId(req, res) {
  console.log('getId', req.params.id)
  User.findById(req.params.id)
    .then((user) => {
      console.log('user', user)
      res.json(user)
    })
    .catch((err) => {
      console.log('err', err)
      res.status(400).send('error api', err)
    })
}
function postUser(req, res) {
  console.log('req.body', req.body)
  const user = new User(req.body)
  user
    .save()
    .then((user) => {
      res.json('User added successfully', user)
    })
    .catch((err) => {
      res.status(400).send('unable to save to database', err)
    })
}
function putUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      console.log(user)
      res.json('User putUser successfully')
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send('unable to save to database')
    })
}
function deleteUser(req, res) {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      console.log('user', user)
      res.json('User del successfully')
    })
    .catch((err) => {
      console.log('err', err)
      res.status(400).send('unable to save to database')
    })
}

module.exports = {
  getId: getId,
  postUser: postUser,
  getUser: getUser,
  putUser: putUser,
  deleteUser: deleteUser,
}
