// Add this to the VERY top of the first file loaded in your app
const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'cart-manager',

})
import express from 'express';
import routes from './src/routes';
import bodyParser from 'body-parser';
import { connect } from './src/db'
import Logger from './src/commons/Logger'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// mount all routes on /api path
app.use('/api', routes);

app.listen(3000, 'localhost', () => {
    Logger.info('Server started.')
})

connect()