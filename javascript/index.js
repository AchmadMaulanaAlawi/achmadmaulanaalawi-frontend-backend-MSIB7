function diagonalSum(matrix) {
  const diagonalNumbers = []
  const matrixLength = matrix.length

  for (let i = 0; i < matrixLength; i++) {
    const currentNumber = matrix[i][i]
    diagonalNumbers.push(currentNumber)

    const duplicate = i === matrixLength - i - 1
    if (!duplicate) {
      diagonalNumbers.push(matrix[i][matrixLength - i - 1])
    }
  }

  const result = diagonalNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
  return result
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
