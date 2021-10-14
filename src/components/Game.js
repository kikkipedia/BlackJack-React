import { useEffect } from 'react'
import { Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { fetchDeck, drawCard } from "../api"
import { useHistory } from 'react-router'
import { getCardValue } from '../app/getCardValue'
import blackjackBand from '../images/blackjackBand.jpg'

const Game = () => {

    const dispatch = useDispatch()
    const {getDeckId, addPlayerCards, addComputerCards, updatePlayerPoints, updateComPoints, updateCompAltPoints, updatePlayerAltPoints, resetDeck, resetPlayer, resetComputer} = bindActionCreators(actionCreators, dispatch)
    const history = useHistory()
    
    useEffect(() => {
        //empty all data in store
        resetDeck()
        resetComputer()
        resetPlayer()
        //fetch deck id and set in store
        fetchDeck()
        .then(data => {
            getDeckId(data.deck_id)
            //draw computer starting cards
            drawCard(data.deck_id, 2)
            .then(data => {
                addComputerCards(data.cards)
                for(let i = 0; i < data.cards.length; i++) {
                    if(data.cards[i].value === 'ACE'){
                        updateCompAltPoints()
                    }
                    else updateComPoints(getCardValue(data.cards[i].value))
                }                
            })
            //draw player starting cards
            drawCard(data.deck_id, 1)
            .then(data => {
                addPlayerCards(data.cards)
                if(data.cards[0].value === 'ACE') {
                    updatePlayerAltPoints()                    
                }
                else updatePlayerPoints(getCardValue(data.cards[0].value))      
            })
        })
    },[])


    const startGame = () => {
        history.push("/game")
    }


    return(
        <div className="content inner">
            <img src={blackjackBand} alt="Black Jack" style={{maxWidth: "55vw", borderRadius: "5%"}}/>
            <br/><br/>
            <Button variant="contained" color="secondary" onClick={startGame} size="small">New game</Button>          
        </div>
    )
}
export default Game