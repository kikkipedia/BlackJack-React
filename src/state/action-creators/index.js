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

export const restartPlayer = (points) => {
    return (dispatch) => {
        dispatch({
            type: "playerZero",
            payload: points
        })
    }
}

export const restartComp = (points) => {
    return (dispatch) => {
        dispatch({
            type: "compZero",
            payload: points
        })
    }
}