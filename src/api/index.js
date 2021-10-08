export const fetchDeck =() => {
    return fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => response.json())
    
}