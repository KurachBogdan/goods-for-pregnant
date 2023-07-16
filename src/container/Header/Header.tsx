import { useState } from 'react'
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
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }

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
                    <input
                        type="checkbox"
                        name=""
                        id="toggle"
                        checked={isMenuOpen}
                        onChange={handleMenuToggle}
                    />
                    <label htmlFor="toggle">
                        <MenuIcon />
                    </label>
                    <NavMenu cartData={cartData} onClose={handleMenuClose} />
                </nav>
            </Container>
        </AppBar>
    )
}

export default Header
