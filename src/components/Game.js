import { useEffect } from 'react'
import { Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { fetchDeck, drawCard } from "../api"
import { useHistory } from 'react-router'

const Game = () => {

    const dispatch = useDispatch()
    const {getDeckId, addPlayerCards, addComputerCards} = bindActionCreators(actionCreators, dispatch)
    const history = useHistory()
    
    useEffect(() => {
        //fetch deck id and set in store
        fetchDeck()
        .then(data => {
            getDeckId(data.deck_id)
            //draw computer starting cards
            drawCard(data.deck_id, 2)
            .then(data => {
                addComputerCards(data.cards)
            })
            //draw player starting cards
            drawCard(data.deck_id, 1)
            .then(data => {
                console.log(data)
                addPlayerCards(data.cards)
            })
        })
    },[])

    const startGame = () => {
        history.push("/game")
    }

    return(
        <div className="content">
            <h3>Black Jack</h3>
            <Button variant="contained" color="secondary" onClick={startGame} size="small">New game</Button>          
        </div>
    )
}
export default Game