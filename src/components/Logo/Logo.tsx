import { Typography } from '@mui/material'
import logo from 'assets/alternative_logo.png'
import './Logo.scss'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, lineHeight: 0.8 }}
        >
            <img className="logo" src={logo} alt="Here must be a logo" />
        </Typography>
    )
}

export default Logo
