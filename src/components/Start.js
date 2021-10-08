import { styled } from '@mui/material/styles'
import MuiGrid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

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

    return(
        <div>
            <Grid container>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        computer
                    </Typography>
                    {computer}
                </Grid>
                <Grid item xs>
                    <Typography variant="button" display="block" gutterBottom>
                        player
                    </Typography>
                    {player}
                </Grid>
            </Grid>
        </div>
    )
}
export default Start