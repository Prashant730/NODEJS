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

//--------------------------------------------------------------------------------------------------------------

//event module:

var eventemitter = require('events')
var obj = new eventemitter()
function fun1() {
  console.log('open a shop')
}
function fun2() {
  console.log('Buy a candy')
}
obj.on('marketopen', fun1)
obj.on('marketopen', fun2)
obj.emit('marketopen')

console.log(obj.getMaxListeners()) //default max listeners are 10
for (let i = 0; i < 10; i++) {
  obj.on('WeatherChange', fun1)
}
obj.emit('WeatherChange')

obj.removeListener('marketopen', fun1)
obj.emit('marketopen')

obj.removeAllListeners('marketopen')
obj.emit('marketopen')
