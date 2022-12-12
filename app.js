import express from 'express';
import * as url from 'url';
import hbs from 'hbs';
import dotenv from 'dotenv';

dotenv.config();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = process.env.PORT;
const options = {
    name: 'Emmanuel',
    title: 'Node with express app'
};

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Serve static content
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', options);
});

app.get('/generic', (req, res) => {
    res.render('generic', options);
});

app.get('/elements', (req, res) => {
    res.render('elements', options);
});

app.get('*',(req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})