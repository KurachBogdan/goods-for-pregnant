import Container from '@mui/material/Container/Container'
import { NavLink } from 'react-router-dom'
import Logo from 'components/Logo/Logo'
import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import NavMenu from 'components/NavMenu/NavMenu'

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
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: 'none',
            }}
        >
            <Container maxWidth="xl">
                <nav>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                    <input type="checkbox" name="" id="toggle" />
                    <label htmlFor="toggle">
                        <MenuIcon />
                    </label>
                    <NavMenu cartData={cartData} />
                </nav>
            </Container>
        </AppBar>
    )
}

export default Header
