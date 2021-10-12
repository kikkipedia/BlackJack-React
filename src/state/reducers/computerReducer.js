const initialState = {
    points: 0,
    altPoints: 0,
    cards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "compPoints":
            return {
                ...state,
                points: state.points + action.payload
            }
        case "computerAlt":
            return {
                ...state,
                points: state.points + 1,
                altPoints: state.points + 14
            }
        case "addComputerCards":
            return Object.assign({}, state, {
                cards: action.payload
              })
        default:
            return state
    }
}

export default reducer