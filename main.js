const app = require('./app')

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Hello world server is listening on ${port}`)
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(process.env.PORT);