import { Typography } from '@mui/material'
import alternative_logo from 'assets/alternative_logo.png'
import './AlternativeLogo.scss'

type Props = {}

const AlternativeLogo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, lineHeight: 0.8 }}
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
