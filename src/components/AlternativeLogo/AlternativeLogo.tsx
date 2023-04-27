import { Typography } from '@mui/material'
import alternative_logo from 'assets/alternative_logo.png'
import './AlternativeLogo.scss'

type Props = {}

const AlternativeLogo = (props: Props) => {
    return (
        <Typography
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alighnItems: 'center' }}
        >
            <img
                className="alternative_logo"
                src={alternative_logo}
                alt="Here must be a logo"
            />
        </Typography>
    )
}

export default AlternativeLogo
