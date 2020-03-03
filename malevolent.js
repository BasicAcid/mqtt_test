var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883', {username: 'publicious', password: "please let me IN :)"})

client.publish('dick pick', 'hahahaha')
client.subscribe('pentagon feed')

client.on('message', function (topic, message) {
    console.log(message.toString())
})
