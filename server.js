const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
  { useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
// update the routes  - changed the (app from the end of file to app.use() )

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

// Start the server*/

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
