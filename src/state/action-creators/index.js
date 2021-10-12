export const updateComPoints= (points) => {
    return (dispatch) => {
        dispatch({
            type: "compPoints",
            payload: points
        })
    }
}

export const updatePlayerPoints = (points) => {
    return (dispatch) => {
        dispatch({
            type: "playerPoints",
            payload: points
        })
    }
}

export const restartPlayer = (player) => {
    return (dispatch) => {
        dispatch({
            type: "playerZero",
            payload: player
        })
    }
}

export const restartComp = (computer) => {
    return (dispatch) => {
        dispatch({
            type: "compZero",
            payload: computer
        })
    }
}

export const getDeckId = (id) => {
    return (dispatch) => {
        dispatch({
            type: "updateDeck",
            payload: id
        })
    }
}

export const addPlayerCards = (card) => {
    return (dispatch) => {
        dispatch({
            type: "addPlayerCards",
            payload: card
        })
    }
}

export const addComputerCards = (card) => {
    return (dispatch) => {
        dispatch({
            type: "addComputerCards",
            payload: card
        })
    }
}