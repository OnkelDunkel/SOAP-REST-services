const express = require('express');
const app = express();
 
app.get('/sandwichbread/:breadType', function (req, res) {
    let breadType = req.params.breadType;
  res.send({ sandwich : `A toasty ${breadType} sandwich` });
});
 
app.listen(54321);