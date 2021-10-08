
const reducer = (state = 0, action) => {
    switch(action.type) {
        case "compPoints":
            return state + action.payload
        case "compZero":
            return action.payload
        default:
            return state
    }
}

export default reducer