import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const compiler = webpack(webpackConfig);


app.use(webpackMiddleWare(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true

}));
app.use(webpackHotMiddleWare(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
