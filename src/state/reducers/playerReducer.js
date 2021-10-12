const initialState = {
    points: 0,
    altPoints: 0,
    cards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "playerPoints":
            return {
                ...state,
                points: state.points + action.payload,
                altPoints: state.points + action.payload
            }
        case "playerAlt":
            return {
                ...state,
                points: state.points + 1,
                altPoints: state.points + 14
            }
        case "addPlayerCards":
            return Object.assign({}, state, {
                cards: action.payload
              })
        default:
            return state
    }
}

export default reducer