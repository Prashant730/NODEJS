/**
 * Filename: eventpractice.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Events and Callbacks - Event Counter with File Persistence
 *
 * Purpose:
 *   This file demonstrates a practical application of EventEmitter combined with
 *   file system operations. It tracks how many times each event has been emitted
 *   and persists this data to a JSON file, so the counts survive across program runs.
 *
 * Learning Objectives:
 *   - Combine EventEmitter with file system operations
 *   - Persist data to JSON files
 *   - Load and update existing data
 *   - Use synchronous file operations for simple cases
 *   - Track application state across executions
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Understanding of EventEmitter (see events.js first)
 *   - Basic knowledge of JSON
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/03-events-callbacks
 *   2. Run: node eventpractice.js
 *   3. Run it multiple times to see the counter increment
 *   4. Check count.json file to see persisted data
 *   5. Expected output: Console log showing event counts
 *
 * Key Concepts:
 *   - Event tracking: Counting event emissions
 *   - Data persistence: Saving data to files
 *   - JSON serialization: Converting objects to/from JSON
 *   - File existence checking: Using fs.existsSync()
 *   - State management: Maintaining state across program runs
 */

// === SECTION: Module Imports ===
var eventemitter = require('events') // For event handling
var obj = new eventemitter() // Create EventEmitter instance
var fs = require('fs') // For file operations

// === SECTION: Initialize Event Counter ===
// This object tracks how many times each event has been emitted
var eventcount = {
  marketOpen: 0,
  WeatherChange: 0,
  Circus: 0,
}

// === SECTION: Load Existing Data ===
// Check if count.json exists from a previous run
// If it does, load the saved counts instead of starting from zero

if (fs.existsSync('count.json')) {
  console.log('Found existing count.json - loading previous counts...')

  // Read the file synchronously
  const savedData = fs.readFileSync('count.json', 'utf-8')

  // Parse JSON string back into JavaScript object
  eventcount = JSON.parse(savedData)

  console.log('Loaded counts:', eventcount)
} else {
  console.log('No existing count.json - starting fresh')
}

// === SECTION: Save Data Function ===
// This function saves the current event counts to count.json
// It's called after every event emission to persist the data

function savedata() {
  // Convert JavaScript object to JSON string
  const jsonData = JSON.stringify(eventcount, null, 2) // null, 2 for pretty formatting

  // Write to file synchronously
  fs.writeFileSync('count.json', jsonData)

  console.log('Data saved to count.json')
}

// === SECTION: Event Listeners with Counter ===
// Each listener increments its counter and saves the data

// Listener for 'marketOpen' event
obj.on('marketOpen', (msg) => {
  console.log('Event: marketOpen')
  eventcount.marketOpen++ // Increment counter
  savedata() // Persist to file
})

// Emit the event
obj.emit('marketOpen')

// Listener for 'WeatherChange' event
obj.on('WeatherChange', (msg) => {
  console.log('Event: WeatherChange')
  eventcount.WeatherChange++
  savedata()
})

obj.emit('WeatherChange')

// Listener for 'Circus' event
obj.on('Circus', (msg) => {
  console.log('Event: Circus')
  eventcount.Circus++
  savedata()
})

obj.emit('Circus')

// === SECTION: Display Summary ===
// Show the final counts after all events have been emitted

console.log('\n=== Event Summary ===')
console.log('Total events tracked:', eventcount)
console.log('\nRun this program again to see the counts increment!')

// === SECTION: Additional Information ===
console.log('\n=== File Information ===')
console.log('Data file: count.json')
console.log('Location:', __dirname + '/count.json')
console.log('\nYou can:')
console.log('- View count.json to see the saved data')
console.log('- Delete count.json to reset the counters')
console.log('- Run this program multiple times to increment counts')
