console.log("hello");
const soap = require('soap');
const Client = require('node-rest-client').Client;


function get_p_and_j(args, cb) {
  let url = 'http://localhost:8000/wsdl?wsdl';
  soap.createClient(url, function (err, client) {
    if (err){
      throw err;
    }
    client.PnJMaker(args, cb);
  });
};

function get_toast(breadType, cb) {
  let client = new Client();
  let url = "http://localhost:54321/sandwichbread/${breadType}";
  let args = {
    path : { "breadType" : breadType }
  };
  client.get(url, args, cb);
};

function make_p_j_sandwich (args) {
  get_toast(args.breadType, function(data, response){
    console.log(`Got data from REST service ${JSON.stringify(data)}`);
    let sandwich = data.sandwich;
    let soap_args = {
      sandwich: sandwich,
      crunchy: args.crunchy,
      jellytype: args.jellytype
    };
    get_p_and_j(soap_args, function(err, res){
      console.log(`Got data from SOAP service ${JSON.stringify(res)}`);
      console.log(`\nFinished sandwich: ${res.result}`)
    })
  });
}

console.log("Making sandwich...");
make_p_j_sandwich({ 
  "breadType" : "whole grain",
  "crunchy" : true,
  "jellytype" : "strawberry",
});
