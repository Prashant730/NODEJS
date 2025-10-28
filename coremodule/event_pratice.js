// var eventemitter = require('events')
// var obj = new eventemitter()
// var fs = require('fs')

// var eventcount = {
//   marketopen: 0,
//   WeatherChange: 0,
//   Circus: 0,
// }

// function savedata() {
//   fs.writeFileSync('count.json', JSON.stringify(eventcount))
// }
// obj.on('marketopen', (msg) => {
//   eventcount.marketopen++
//   savedata()
// })
// obj.emit('marketopen')

// obj.on('WeatherChange', (msg) => {
//   eventcount.WeatherChange++
//   savedata()
// })
// obj.emit('WeatherChange')

// obj.on('Circus', (msg) => {
//   eventcount.Circus++
//   savedata()
// })
// obj.emit('Circus')
// console.log('summary for events', eventcount)

//--------------------------------------------------------------------------------------------------------

var eventemitter = require('events')
var obj = new eventemitter()
var fs = require('fs')

var eventcount = {
  marketopen: 0,
  WeatherChange: 0,
  Circus: 0,
}

if (fs.existsSync('count.json')) {
  const saveData = fs.readFileSync('count.json', 'utf-8')
  eventcount = JSON.parse(saveData)
}

function savedata() {
  fs.writeFileSync('count.json', JSON.stringify(eventcount))
}
obj.on('marketopen', (msg) => {
  eventcount.marketopen++
  savedata()
})
obj.emit('marketopen')

obj.on('WeatherChange', (msg) => {
  eventcount.WeatherChange++
  savedata()
})
obj.emit('WeatherChange')

obj.on('Circus', (msg) => {
  eventcount.Circus++
  savedata()
})
obj.emit('Circus')
console.log('summary for events', eventcount)
