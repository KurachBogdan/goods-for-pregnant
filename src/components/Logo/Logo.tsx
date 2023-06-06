import { Typography } from '@mui/material'
import logo from 'assets/logo.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{
                flexGrow: 1,
                lineHeight: 0.8,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <img
                style={{ height: '30px' }}
                src={logo}
                alt="Here must be a logo"
            />
        </Typography>
    )
}

export default Logo
