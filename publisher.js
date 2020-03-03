var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883', {username: 'publisher', password: "6*c[%FJ/@?H'.&!Dw/"})

client.on('connect', function () {
    client.publish('presence', 'Hello Friend')
})
