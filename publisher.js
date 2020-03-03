var mqtt = require('mqtt')
var client = mqtt.connect('mqtts://localhost:8443', {username: 'publisher', password: "6*c[%FJ/@?H'.&!Dw/"})

client.on('connect', function () {
    client.publish('presence', 'Hello Friend')
})
