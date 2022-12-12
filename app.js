import express from 'express';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 8080;

// Serve static content
app.use(express.static('public'))

app.get('/basic-response', (req, res) => {
    res.send('Basic Response page');
});

app.get('*',(req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})