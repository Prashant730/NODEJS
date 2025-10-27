let obj = {
  name: 'prashant',
  age: 21,
  greet: () => {
    return 'object'
  },
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.greet())

console.log(obj['name'])
console.log(obj['age'])
console.log(obj['greet']())

console.log(obj)
