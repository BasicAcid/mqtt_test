var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883', {username: 'subscriber', password: "s@}_,9'JhGdNV>Z$;{"})

client.subscribe('presence')

client.on('message', function (topic, message) {
  console.log(message.toString())
})
