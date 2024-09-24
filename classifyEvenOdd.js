const classifyEvenOdd = () => {
  const numbers = []
  for (let i = 0; i < 5; i++) {
    const number = Math.random() * 100
    numbers.push(Math.trunc(number))
  }
  numbers.map(x => {
    return console.log(x + ' is ' + `${x % 2 === 0 ? 'even' : 'odd'}`)
  })
}
classifyEvenOdd()
