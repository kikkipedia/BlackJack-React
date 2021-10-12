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
    const [showAlt, setShowAlt] = useState(false)

    const drawOneCard = () => {
        let card = drawCard(deckId, 1)
        return card
    }
    
    const computerDraw = () => {
        drawOneCard()
        .then(data => {
            addComputerCards(data.cards)
            if(data.cards[0].value === 'ACE') {
                updateCompAltPoints()                 
            }
            else updateComPoints(getCardValue(data.cards[0].value))                
        })
    }

    const playerDraw = () => {
        drawOneCard()
        .then(data => {
            addPlayerCards(data.cards)
            if(data.cards[0].value === 'ACE') {
                updatePlayerAltPoints()
                setShowAlt(true)                    
            }
            else updatePlayerPoints(getCardValue(data.cards[0].value))                
        })
        computerDraw()
    }

    const handleStop = () => {
        setShowButtons(false)
        //if computer points || altPoints < 18
        if(computer.points < 18 || computer.altPoints < 18) {
            computerDraw()
            revealCard()
        }
        else revealCard()
    }

    const revealCard = () => {
        showCard(false)
        //who wins?
    }

    //calculates winner
    const getWinner = () => {

    }

    return(
        <div className="content">
            <Grid container>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        computer
                    </Typography>
                    <Grid>
                        {hideCard ? (
                            <img src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20purple.png" alt="secret" className="cardImage"/>
                        ) : (
                            <img src={computer.cards[0].image} alt="hiddenCard" className="cardImage"/>
                        )}
                        
                        {computer.cards.slice(1).map((item, i) => 
                            <img src={item.image} alt="card" className="cardImage" key={i}/>
                        )}
                    </Grid>
                    <p>Points: {computer.points} <span>/ {computer.altPoints}</span></p>
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
                    <p>Points: {player.points} 
                    {showAlt ? (
                        <span>/ {player.altPoints}</span>
                    ) : (null)}
                    </p>
                    {showButtons ? (
                        <p><Button onClick={playerDraw}>Draw</Button><Button onClick={handleStop}>Stop</Button></p>
                    ) : (
                        <p><Button>Restart</Button></p>
                    )}
                    
                </Grid>
            </Grid>
        </div>
    )
}
export default Start