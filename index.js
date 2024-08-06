const express = require('express');
const app = express();
app.use(express.json());

const router = require('./route/studentroute')
app.use('/api', router)
app.listen(5000, () => {
    console.log(`Running in 5000`);
})
