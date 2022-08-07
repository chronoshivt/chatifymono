const HyperExpress = require('hyper-express');
const webserver = new HyperExpress.Server();

// Create websocket route to handle opened websocket connections
webserver.ws('/ws/connect', (ws) => {
    // Log when a connection has opened for debugging
    console.log('user ' + ws.context.user_id + ' has connected to consume news events');
    
    // Handle incoming messages to perform changes in consumption
    ws.on('message', (message) => {
        // Make some changes to which events user consumes based on incoming message
    });
    
    // Do some cleanup once websocket connection closes
    ws.on('close', (code, message) => {
       console.log('use ' + ws.context.user_id + ' is no longer listening for news events.');
       // You may do some cleanup here regarding analytics
    });
});


// Activate webserver by calling .listen(port, callback);
webserver.listen(80)
.then((socket) => console.log('Webserver started on port 80'))
.catch((error) => console.log('Failed to start webserver on port 80'));