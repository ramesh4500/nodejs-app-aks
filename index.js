const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
res.send('<h1>!-- Hello From Ramesh Node App --!</h1>');
});

app.listen(4000, () => {
    console.log('App listening on port 4000' );
});
