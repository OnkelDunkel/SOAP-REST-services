# System integration assignment 03

Author: Rasmus Nordbjærg

Note to reviewer: I am most likely not going to read your review so please don't bother spending time on it ;)

## The business

The business makes peanutbutter jelly sandwiches which consists of bread and topping (So basically we combine text strings). The bread and the topping are of course 'made' in each of their web service. We get the bread from a REST service and we get the topping from the SOAP. Both services runs locally on your machine.

The REST service are accessed from below URL and can take 'breadType' as a query string parameter.
    
    localhost:54321/sandwichbread
    
The SOAP service WSDL can be accessed from:
    
    http://localhost:8000/wsdl?wsdl
    

## How to run

You will need to have node installed.
You will have to run 'npm install' in all three folders because I set it up in a stupid way and didn't bother to change it.
* Peanutbutter jelly client
* REST service
* SOAP service

Run 'node app.js' in 'REST service' and 'SOAP service' folders to start the webservices.
Run 'node client.js' in 'Peanutbutter jelly client' folder to run the client.



