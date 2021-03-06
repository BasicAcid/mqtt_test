var mosca = require('mosca');

var SECURE_KEY = '/home/david/Sources/minica/localhost/key.pem';
var SECURE_CERT = '/home/david/Sources/minica/localhost/cert.pem';

var settings = {
    port: 1883,
    secure : {
        port: 8443,
        keyPath: SECURE_KEY,
        certPath: SECURE_CERT,
    }
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
    console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running');
    server.authenticate = authenticate;
    server.authorizePublish = authorizePublish;
    server.authorizeSubscribe = authorizeSubscribe;
}

// Accepts the connection if the username and password are valid
var authenticate = function(client, username, password, callback) {
    if (username === 'subscriber')
        var authorized = (username === 'subscriber' && password.toString() === "s@}_,9'JhGdNV>Z$;{");
    else if (username === 'publisher')
        var authorized = (username === 'publisher' && password.toString() === "6*c[%FJ/@?H'.&!Dw/");

    if (authorized) client.user = username;
    callback(null, authorized);
}

// In this case the client authorized as alice can publish to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizePublish = function(client, topic, payload, callback) {
    callback(null, client.user == 'publisher');
}

// In this case the client authorized as alice can subscribe to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizeSubscribe = function(client, topic, callback) {
    callback(null, client.user == 'subscriber');
}
