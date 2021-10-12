//fetch deck id
export const fetchDeck = () => {
    return fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then(response => response.json())
}

//draw card(s)
export const drawCard = (deckId, amount) => {
    return fetch('https://www.deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=' + amount)
    .then(response => response.json())
}

