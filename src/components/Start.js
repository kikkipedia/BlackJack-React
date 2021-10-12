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
    const {addPlayerCards, addComputerCards} = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        //count points
    },[])


    return(
        <div className="content">
            <Grid container>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        computer
                    </Typography>
                    
                    <p><img src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20purple.png" alt="secret" className="cardImage"/> <img src={computer.cards[0].image} alt="card" className="cardImage"/></p>

                </Grid>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        player
                    </Typography>
                    <p><img src={player.cards[0].image} alt="card" className="cardImage"/></p>
                    <p>Points: {player.points}</p>
                    <p><Button>Draw</Button><Button>Stop</Button></p>
                </Grid>
            </Grid>
        </div>
    )
}
export default Start