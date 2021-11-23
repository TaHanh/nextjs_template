const routes = (module.exports = require('next-routes')())

routes.add('/', 'index')
.add('/active-account', 'active-account')
.add('/transaction-confirmation', 'transaction-confirmation')
.add('/create-share-account', 'create-share-account')
