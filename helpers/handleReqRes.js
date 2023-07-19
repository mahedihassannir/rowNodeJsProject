// handleReqRes file it is 

// dependises

const url = require("url")

const { StringDecoder } = require("string_decoder");



const handler = {
    // this is an packet to make a object 
};



handler.handlerReqRes = (req, res) => {// this is the function move in to the packet 


    const parseUrl = url.parse(req.url, true);

    //path  
    const path = parseUrl.pathname;

    // marge math 
    const trimedpath = path.replace(/^\/+|\/+$/g, '');

    // get the method
    const method = req.method.toLowerCase();

    // to get the query
    const queryStringObject = parseUrl.query;

    // to get the heder
    const header = req.headers;



    const decoder = new StringDecoder('utf-8');

    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })
    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);

        // basic res handle

        res.end("yes our server is created successfully and its work");


    })






};




// export from here the functions
module.exports = handler; // then we exports the object



