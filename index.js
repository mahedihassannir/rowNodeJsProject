/**
 * title url ups and down check web app
 *
 * coder name: mahedi hassan
 *
 * des:
 *
 * date : 19/6/2023
 *
*/

// start

// server module 

const http = require("http"); //require the http module


const { handlerReqRes } = require('./helpers/handleReqRes'); // require the function from the object 

// ends

// module scafolding
const app = { //sca folding like a bucket


};


app.config = { // all confogaration
    port: 3000

};


// create server

app.createserver = () => { //create a server
    const server = http.createServer(app.handleRequests);


    server.listen(app.config.port, () => {
        console.log(`server is running on port ${app.config.port}`);
    });


};



// handle request and responses

// thats it my fried to use moduler style file to use 
app.handleRequests = handlerReqRes; // then use the dictractured function
// thats it my fried to use moduler style file to use 


// start the server
app.createserver();

