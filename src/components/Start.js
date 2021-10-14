import { styled } from '@mui/material/styles'
import MuiGrid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useEffect, useState } from 'react'
import { drawCard } from '../api'
import { getCardValue } from '../app/getCardValue'
import { useHistory } from 'react-router'
import { calculateWinner } from '../app/calculateWinner'

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
}))

const Start = () => {

    const computer = useSelector((state) => state.computer)
    const player = useSelector((state) => state.player)
    const deckId = useSelector((state) => state.deck)
    const dispatch = useDispatch()
    const {addPlayerCards, addComputerCards, updatePlayerAltPoints, updatePlayerPoints, updateCompAltPoints, updateComPoints} = bindActionCreators(actionCreators, dispatch)

    const [hideCard, showCard] = useState(true)
    const [showButtons, setShowButtons] = useState(true)
    const [showComputerPoints, setShowComputerPoints] = useState(false)
    const history = useHistory()
    const [playerAce, setPlayerAce] = useState(false)
    const [computerAce, setComputerAce] = useState(false)
    const [computerText, setComputerText] = useState('')
    const [playerText, setPlayerText] = useState('')

    //checks if player/computer gets over 21 & lose
    useEffect(() => {
        if (player.points === 21 || player.altPoints === 21) {
            alert("You win!!")
            setShowButtons(false)
        }
        else if(player.points > 21 && player.altPoints > 21){
            alert("You loose!")
            setPlayerText('F U L L !')
            setShowButtons(false)            
        }
        else if(computer.points > 21 && computer.altPoints > 21){
            alert("You win!!")
            setComputerText('F U L L !')
            setShowButtons(false)    
        }
    },[player, computer])


    //draw card from the decks
    const drawOneCard = () => {
        let card = drawCard(deckId, 1)
        return card
    }
    
    //computer draws one card and points are updated
    const computerDraw = () => {
        drawOneCard()
        .then(data => {
            addComputerCards(data.cards)
            if(data.cards[0].value === 'ACE') {
                updateCompAltPoints()
                setComputerAce(true)             
            }
            else updateComPoints(getCardValue(data.cards[0].value))                
        })
    }

    //player draws one card and points are updated
    const playerDraw = () => {
        drawOneCard()
        .then(data => {
            addPlayerCards(data.cards)
            if(data.cards[0].value === 'ACE') {
                updatePlayerAltPoints()
                setPlayerAce(true)                    
            }
            else updatePlayerPoints(getCardValue(data.cards[0].value))                
        })
        //computer must draw
        if(player.points < 21 || player.altPoints < 21) {
            computerDraw()
        }
        else console.log("stopped")
    }

    //player choose to stay
    const handleStop = () => {
        setShowButtons(false)
        if(computer.points < 18 || computer.altPoints < 18) {
            revealCard()
        }
        else revealCard()
    }

    const revealCard = () => {
        computerDraw()
        showCard(false)
        getWinner()
        setShowComputerPoints(true)
    }

    //calculates winner
    const getWinner = () => {
        //if no ace has been drawn
        const compClosest = calculateWinner(computer.points, computer.altPoints)
        const playerClosest = calculateWinner(player.points, player.altPoints)
        console.log("computer best: " + compClosest)
        console.log("player best: " + playerClosest)

        if (compClosest === playerClosest) {
            console.log("draw!")
        }
        else {
            if(computerAce && playerAce){
                console.log("both have ace")
            }
            else if(computerAce) {
                console.log("computer has ace")
            }
            else if(playerAce){
                console.log("player has ace")
            }
            else if(computer.points > player.points) {
                console.log("no aces")
                console.log("computer win", computer.points)
            }
        }        
    }

    //computer gets the hidden card
    const endGame = () => {
        showCard(false)
        setShowComputerPoints(true)
        setShowButtons(false)
    }

    //set all to initial state
    const restart = () => {
        history.push("/")
    }

    return(
        <div className="content inner">
            <Grid container>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        computer
                    </Typography>
                    <Grid>
                        {hideCard ? (
                            <img src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20purple.png" alt="secret" className="cardImage"/>
                        ) : (null)}
                        {computer.cards.map((item, i) => 
                            <img src={item.image} alt="card" className="cardImage" key={i}/>
                        )}
                    </Grid>
                    {showComputerPoints ? (
                        <p>{computer.points}</p>
                    ) : (null)}
                    {computerAce ? (
                        <p>{computer.altPoints}</p>
                    ) : (null)}
                    <h3>{computerText}</h3>
                </Grid>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        player
                    </Typography>
                    <Grid>
                        {player.cards.map((item, i) => 
                            <img src={item.image} alt="card" className="cardImage" key={i}/>
                        )}
                    </Grid>
                    <p>{player.points} 
                    {playerAce ? (
                        <span> or {player.altPoints}</span>
                    ) : (null)}
                    </p>
                    <h3>{playerText}</h3>
                    {showButtons ? (
                        <div>
                        <p><Button variant="contained" color="secondary" onClick={playerDraw}>hit me</Button></p>
                        <p><Button variant="contained"  color="error" onClick={handleStop}>stay</Button></p>
                        </div>
                    ) : (
                        <p><Button variant="contained"color="secondary" onClick={restart}>Restart</Button></p>
                    )}
                    
                </Grid>
            </Grid>
        </div>
    )
}
export default Start