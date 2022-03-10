

const express = require('express');
const app = express();
const port = 3000
const path = require('path');

app.use(express.static(__dirname+'/Public'));
app.get('/', (req,res) => {res.sendFile(path.resolve('Views', 'index.html'));});

app.listen(port);