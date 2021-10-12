const reducer = (state = '', action) => {
    switch(action.type) {
        case "updateDeck":
            return action.payload
        default:
            return state
    }
}

export default reducer