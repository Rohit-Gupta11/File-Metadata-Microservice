require('dotenv').config()
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single('upfile'), (req,res) => {
    let result = {}
    result['name'] = req.file.originalname;
    result['type'] = req.file.mimetype;
    result['size'] = req.file.size;
    res.json(result);
});

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
