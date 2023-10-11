import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';
import passwordConnect from './passwordConnect.js';
import config from './webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack';

const PORT = process.env.PORT || 8080;
const compiler = webpack(config)
const app = express();

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'mutabazi',
    password: passwordConnect,
    database: 'xpensedb',
    multipleStatements: true
})
mysqlConnection.connect();
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

