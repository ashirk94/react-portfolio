const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//routes
const homeRouter = require('./routes/index');
const usersRouter = require("./routes/users");
app.use('/', homeRouter);
app.use('/users', usersRouter);

const uri = process.env.DB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo database connection established");
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
