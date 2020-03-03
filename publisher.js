var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883', {username: 'publisher', password: "6*c[%FJ/@?H'.&!Dw/"})

client.publish('presence', 'Hello mqtt')

client.on('message', function (topic, message) {
  console.log(message.toString())
})
