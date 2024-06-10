const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();



app.use(express.json());


const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});