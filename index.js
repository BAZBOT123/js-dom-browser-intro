const numberOne = 1 + Math.floor(Math.random() * 100)
alert(numberOne)
const numberTwo = 1 + Math.floor(Math.random() * 100)
alert(numberTwo)
const numberThree = 1 + Math.floor(Math.random() * 100)
alert(numberThree)
const numberFour = 1 + Math.floor(Math.random() * 100)
alert(numberFour)

const ansOne = Number(prompt('What was the first number?'))
const ansTwo = Number(prompt('What was the second number?'))
const ansThree = Number(prompt('What was the third number?'))
const ansFour = Number(prompt('What was the fourth number?'))

let correct = 0
if (numberOne==ansOne) {
    correct++
}
if (numberTwo==ansTwo) {
    correct++
}
if (numberThree==ansThree) {
    correct++
}
if (numberFour==ansFour) {
    correct++
}

alert('you got ${correct} answers correct')
    