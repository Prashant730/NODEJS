//event module:adding event functionality to your application

// var eventemitter = require('events')
// var obj = new eventemitter()

// obj.addListener('marketopen', (msg) => {
//   console.log(msg)
// })
// obj.emit('marketopen', 'please do ur task')
// obj.emit('marketopen', 'please do ur task')

//--------------------------------------------------------------------------------------------------------------

//event module:on method:it is same as addListener /**

// var eventemitter = require('events')
// var obj = new eventemitter()

// obj.addListener('marketopen', (msg) => {
//   console.log(msg)
// })
// obj.emit('marketopen', 'please do ur task')
// obj.emit('marketopen', 'please do ur task')

// obj.on('WheatherChange', (msg) => {
//   console.log(msg)
// })
// obj.emit('WheatherChange', 'Weather has been changed')
// obj.emit('WheatherChange', 'Weather has been changed')

//--------------------------------------------------------------------------------------------------------------

//event module once method:it will execute only once

// var eventemitter = require('events')
// var obj = new eventemitter()

// obj.addListener('marketopen', (msg) => {
//   console.log(msg)
// })
// obj.emit('marketopen', 'please do ur task')
// obj.emit('marketopen', 'please do ur task')

// obj.on('WeatherChange', (msg) => {
//   console.log(msg)
// })
// obj.emit('WeatherChange', 'Weather has been changed')
// obj.emit('WeatherChange', 'Weather has been changed')

// obj.once('Circus', (msg) => {  //agar on likh ke karenge to baar baar chalega but once likh ke karenge to sirf ek baar chalega

//   console.log(msg)
// })
// obj.emit('Circus', 'Circus is there please visit')
// obj.emit('Circus', 'Circus is there please visit again')
