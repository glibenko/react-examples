import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

const __DEV__ = process.env.NODE_ENV !== 'production';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

if (__DEV__) {
  const {createProxyMiddleware} = require("http-proxy-middleware");
  app.use('/', createProxyMiddleware({target: 'http://localhost:3021/', changeOrigin: true}));
} else {
  app.use(`/static`, express.static('build'));

  app.use('/', function(...args) {
    args[1].sendFile(path.resolve(__dirname, '../../build/index.html'));
  });
}

app.listen(3020, () => {
  console.log('Listening:', 3020);
});