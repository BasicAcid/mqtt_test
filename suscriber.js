var mqtt = require('mqtt')
var client = mqtt.connect('mqtts://localhost:8443', {username: 'subscriber', password: "s@}_,9'JhGdNV>Z$;{"})

client.on('connect', function () {
    client.subscribe('presence')
})

client.on('message', function (topic, message) {
    console.log(message.toString())
    client.end()
})
