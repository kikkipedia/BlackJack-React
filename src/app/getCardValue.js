
export const getCardValue = (value) => {
    if (value === 'ACE') {
        return 14
    }
    if (value === 'KING') {
        return 13
    }
    if (value === 'QUEEN') {
        return 12
    }
    if (value === 'JACK') {
        return 11
    }
    else return parseInt(value)
}