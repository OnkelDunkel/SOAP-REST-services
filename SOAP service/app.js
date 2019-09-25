"use strict";

const soap = require('soap');
const express = require('express');
const fs = require('fs');

function prepare_sandwich(args) {
    console.log('prepare_sandwich');
    let sandwich = args.sandwich;
    let pbType = args.crunchy ? "crunchy": "creamy";
    let jellyType = args.jellytype;
    return {
        result: `${sandwich} with ${pbType} peanutbutter and ${jellyType} jelly`
        }
}

var serviceObject = {
    PnJService: {
        PnJServiceSoapPort: {
            PnJMaker: prepare_sandwich
        },
        PnJServiceSoap12Port: {
            PnJMaker: prepare_sandwich
        }
    }
};

var xml = fs.readFileSync('service.wsdl', 'utf8');
var app = express();

app.get('/', function (req, res) {
  res.send('More info:<br/><a href="https://github.com/OnkelDunkel/SOAP-REST-services">Git repo</a>');
})

var port = 8000;
app.listen(port, function () {
  console.log(`Listening on ${port}`);
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log(`See if the service is running at http://localhost:${port}${wsdl_path}?wsdl`);
});
