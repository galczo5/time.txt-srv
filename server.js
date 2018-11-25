#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

const program = require('commander');

program.option('--port', 'serwer port, default 3000');

program.parse(process.argv);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(listDirectories('/home/kamil/tt')));
});

app.listen(port, () => console.log(`app listening on port ${port}!`));

function listDirectories(source) {
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const getDirectories = source =>
        fs.readdirSync(source).filter(name => isDirectory(path.join(source, name)));

  return getDirectories(source);
}
