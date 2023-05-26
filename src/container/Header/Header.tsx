import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container/Container'
import NavMenu from 'components/NavMenu/NavMenu'
import { NavLink } from 'react-router-dom'
import Logo from 'components/Logo/Logo'

type Props = {
    cartData: {
        totalCount: number
    }
}

const Header = ({ cartData }: Props) => {
    return (
        <AppBar
            position="sticky"
            sx={{
                height: '49px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: 'none',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                    <NavMenu cartData={cartData} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
