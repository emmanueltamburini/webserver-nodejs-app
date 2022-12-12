import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World page');
});

app.get('*',(req, res) => {
  res.send('404 | Page not found');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})