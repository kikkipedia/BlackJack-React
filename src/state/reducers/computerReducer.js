const initialState = {
    points: 0,
    altPoints: 0,
    cards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "compPoints":
            return state.points + action.payload
        case "compZero":
            return action.payload
        case "addComputerCards":
            return Object.assign({}, state, {
                cards: action.payload
              })
        default:
            return state
    }
}

export default reducer