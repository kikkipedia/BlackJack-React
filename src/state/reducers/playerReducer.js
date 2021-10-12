const initialState = {
    points: 0,
    cards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "playerPoints":
            return state + action.payload
        case "playerZero":
            return action.payload
        case "addPlayerCards":
            return Object.assign({}, state, {
                cards: action.payload
              })
        default:
            return state
    }
}

export default reducer