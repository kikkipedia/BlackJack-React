export const calculateWinner = (firstNumber, secondNumber) => {
    if (firstNumber !== secondNumber) {
        const first = Math.abs(firstNumber - 21)
        const second = Math.abs(secondNumber - 21)

        if (first < second) {
            return firstNumber
        }
        if (second < first) {
            return secondNumber
        }
        return 0
    }
    else return false
}