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
                points: state.points + action.payload,
                altPoints: state.altPoints + action.payload
            }
        case "computerAlt":
            return {
                ...state,
                points: state.points + 1,
                altPoints: state.points + 14
            }
        case "addComputerCards":
            const newArr = state.cards.concat(action.payload)
            return {
                ...state,
                cards: newArr
            }
        default:
            return state
    }
}

export default reducer