## Fake API for Boilerplate ES6 MVC App

### Node.js KOA API Server

Using Koa we'll spin up a very minimal Node.js API to act as our bridging component for further integration.

### Install and run API server

```bash
sudo npm install
npm run api
```

### Command

#### Setup

    npm install

#### Develop

    npm start

#### Test

    npm test



### Dependencies

- Watcher and hot-reload: [nodemon](http://nodemon.io/)
- Test:
    + [mocha](https://mochajs.org/)
    + [should](https://github.com/shouldjs/should.js)
    + [supertest](https://github.com/visionmedia/supertest)
- Build: [babel](http://babeljs.io/)
    + tools: babel-register
    + presets: babel-preset-es2015-node5
    + plugins: transform-async-to-generator, syntax-async-functions
- *Lint*:
    You can choose the lint tool that you prefer.

### Reference

- [koajs/koa#533](https://github.com/koajs/koa/issues/533)
- [koajs/koa#596](https://github.com/koajs/koa/issues/596)


### License

MIT &copy; [GeekPlux](https://github.com/geekplux)
