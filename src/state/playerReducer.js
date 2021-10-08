const reducer = (state = 0, action) => {
    switch(action.type) {
        case "playerPoints":
            return state + action.payload
        default:
            return state
    }
}

export default reducer