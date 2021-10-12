const initialState = {
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "updateDeck":
            return action.payload
        case "resetDeck":
            return initialState
        default:
            return state
    }
}

export default reducer