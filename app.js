// inporting modules
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

//  Routing 

app.use(require('./routers/server.js'));
app.use(require('./admin/admin.js'));

//  Admin side port
app.listen(3000);