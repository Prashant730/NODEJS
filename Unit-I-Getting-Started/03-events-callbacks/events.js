/**
 * Filename: events.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Events and Callbacks - EventEmitter
 *
 * Purpose:
 *   This file demonstrates Node.js's EventEmitter class, which is the foundation
 *   of Node's event-driven architecture. You'll learn how to create custom events,
 *   listen for them, and manage event listeners.
 *
 * Learning Objectives:
 *   - Understand the EventEmitter pattern in Node.js
 *   - Learn to create and emit custom events
 *   - Master event listener methods: on(), once(), addListener()
 *   - Understand how to remove listeners
 *   - Learn about listener limits and memory management
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Understanding of callbacks and functions
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/03-events-callbacks
 *   2. Run: node events.js
 *   3. Expected output: Various console logs showing event emissions
 *
 * Key Concepts:
 *   - EventEmitter: Core class for handling events in Node.js
 *   - emit(): Triggers an event
 *   - on(): Registers a listener that fires every time
 *   - once(): Registers a listener that fires only once
 *   - Listener management: Adding, removing, and limiting listeners
 */

// === SECTION: Importing EventEmitter ===
// The 'events' module is a core Node.js module that provides the EventEmitter class

var eventemitter = require('events')

// Create a new EventEmitter instance
// This object can now emit events and have listeners attached to it
var obj = new eventemitter()

// === SECTION: Basic Event Listener with addListener() ===
// addListener() is an alias for on() - they work identically
// This listener will fire every time 'marketOpen' event is emitted

obj.addListener('marketOpen', (msg) => {
  console.log(msg)
})

// Emit the 'marketOpen' event twice
// Both emissions will trigger the listener above
obj.emit('marketOpen', 'please do ur task')
obj.emit('marketOpen', 'please do ur task')

// === SECTION: Using on() Method ===
// on() is the most common way to register event listeners
// Like addListener(), it fires every time the event is emitted

obj.on('WeatherChange', (msg) => {
  console.log(msg)
})

// Both emissions will trigger the listener
obj.emit('WeatherChange', 'waether has been changed')
obj.emit('WeatherChange', 'waether has been changed')

// === SECTION: Using once() Method ===
// once() registers a listener that fires ONLY on the first emission
// Subsequent emissions are ignored

obj.once('Circus', (msg) => {
  console.log(msg)
})

// First emission: listener fires and prints the message
obj.emit('Circus', 'circus is there please visit')

// Second emission: listener does NOT fire (already removed after first call)
obj.emit('Circus', 'circus is there please visit again')

// === SECTION: Multiple Listeners for Same Event ===
// You can attach multiple listeners to the same event
// They will all fire in the order they were registered

function fun1() {
  console.log('open a shop')
}

function fun2() {
  console.log('Buy a candy')
}

// Attach two listeners to 'marketOpen'
obj.on('marketOpen', fun1)
obj.on('marketOpen', fun2)

// This will trigger ALL listeners for 'marketOpen':
// 1. The original addListener callback
// 2. fun1
// 3. fun2
obj.emit('marketOpen')

// === SECTION: Listener Limits ===
// By default, Node.js warns if more than 10 listeners are added to prevent memory leaks

// Check the current max listener limit (default is 10)
console.log(obj.getMaxListeners())

// Add 10 listeners - this will trigger a warning
for (let i = 0; i < 10; i++) {
  obj.on('WeatherChange', fun1)
}
obj.emit('WeatherChange')

// === SECTION: Changing Listener Limits ===
// You can increase the limit if you legitimately need more listeners

obj.setMaxListeners(20)

// Now we can add 15 more listeners without warnings
for (let i = 0; i < 15; i++) {
  obj.on('WeatherChange', fun1)
}
obj.emit('WeatherChange')

// === SECTION: Removing Specific Listeners ===
// removeListener() removes a specific function from an event
// Note: You must pass the same function reference that was added

obj.removeListener('marketOpen', fun1)

// Now only the original listener and fun2 will fire
obj.emit('marketOpen')

// === SECTION: Removing All Listeners ===
// removeAllListeners() removes ALL listeners for a specific event

obj.removeAllListeners('marketOpen')

// This emit will do nothing - no listeners are attached anymore
obj.emit('marketOpen')

// === SECTION: Summary ===
console.log('\n=== EventEmitter Summary ===')
console.log('✓ on() / addListener() - Listen every time')
console.log('✓ once() - Listen only once')
console.log('✓ emit() - Trigger an event')
console.log('✓ removeListener() - Remove specific listener')
console.log('✓ removeAllListeners() - Remove all listeners for an event')
console.log('✓ setMaxListeners() - Change listener limit')
