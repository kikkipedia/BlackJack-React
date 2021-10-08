import Start from "./Start"
import { useState } from 'react'
import { Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Game = () => {

    const [start, setStart] = useState(false)
    const dispatch = useDispatch()
    const {restartPlayer, restartComp} = bindActionCreators(actionCreators, dispatch)
    
    const startGame = () => {
        //set points to 0
        restartComp(0)
        restartPlayer(0)
        setStart(true)
    }

    return(
        <div className="content">
            <h3>Black Jack</h3>
            <Button variant="contained" color="secondary" onClick={startGame} size="small">New game</Button>
            {start ? (
                <Start/>
            ) : (null)}            
        </div>
    )
}
export default Game