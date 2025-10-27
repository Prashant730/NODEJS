function isArmstrong(num) {
  let sum = 0
  let temp = num
  const digits = num.toString().length

  while (temp > 0) {
    let digit = temp % 10
    sum += digit ** digits
    temp = Math.floor(temp / 10)
  }

  return sum === num
}
// let number = 153
// if (isArmstrong(number)) {
//   console.log(number + ' is an Armstrong number')
// } else {
//   console.log(number + ' is not an Armstrong number')
// }
module.exports = { isArmstrong }
