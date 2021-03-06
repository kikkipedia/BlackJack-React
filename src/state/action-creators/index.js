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

export const updatePlayerAltPoints = () => {
    return (dispatch) => {
        dispatch({
            type: "playerAlt"
        })
    }
}

export const updateCompAltPoints = () => {
    return (dispatch) => {
        dispatch({
            type: "computerAlt"
        })
    }
}

export const resetDeck = () => {
    return (dispatch) => {
        dispatch({
            type: "resetDeck"
        })
    }
}

export const resetPlayer = () => {
    return (dispatch) => {
        dispatch({
            type: "resetPlayer"
        })
    }
}

export const resetComputer = () => {
    return (dispatch) => {
        dispatch({
            type: "resetComputer"
        })
    }
}