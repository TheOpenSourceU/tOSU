const $npm = {
  express: require('express'),
  debug: require('debug'),
  promise: require('bluebird')
};
const $core = {
  shorten: require('./shorten'),
  expand: require('./expand')
};
const app = $npm.express();

app.post('/shorten', $core.shorten);
app.get('/e', $core.expand);


//We don't support /index...
app.get('/', (req, res) => res.status(404).send('Not found'));

// For debug...
app.listen(3000, () => console.log('example app listening on port 3000'));
