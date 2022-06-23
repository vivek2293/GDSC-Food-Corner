const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
app.use(require('./routers/client.js'))
app.use(require('./routers/admin.js'))

app.listen(3000)