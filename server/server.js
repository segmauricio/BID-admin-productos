const express = require('express');
const port = 8000;
const cors = require('cors');
const app = express();

require('../server/config/mongoose.config'); // This is new

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

require('../server/routes/products.routes')(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );