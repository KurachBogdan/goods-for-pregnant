import { useState } from 'react'
import Container from '@mui/material/Container/Container'
import { NavLink } from 'react-router-dom'
import Logo from 'components/Logo/Logo'
import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import NavMenu from 'components/NavMenu/NavMenu'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { selectLikesCount } from 'redux/likeReducer'
import { useAppSelector } from 'redux/hooks'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

type Props = {
    cartData: {
        totalCount: number
    }
}

const Header = ({ cartData }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const likesCount = useAppSelector(selectLikesCount)

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
                    <Button className="nav-button only_for_mobile">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'menu_itemActive_mobile'
                                    : 'nav-button-link'
                            }
                            to="/favorite"
                        >
                            <FavoriteIcon className="favorite_icon_color" />
                            {likesCount}
                        </NavLink>{' '}
                    </Button>
                    <Button className="nav-button shop_cart_icon only_for_mobile">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'menu_itemActive_mobile'
                                    : 'nav-button-link'
                            }
                            to="/cart"
                        >
                            <ShoppingCartIcon className="shoppig_cart_icon_color" />
                            {cartData.totalCount}
                        </NavLink>{' '}
                    </Button>
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
