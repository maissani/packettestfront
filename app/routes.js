const routes = require('next-routes')();

routes.add('/', '/home/index')
routes.add('/probabilities', '/probabilities/index')

module.exports = routes;
