import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'
import './NavMenu.scss'
import { Link } from 'react-router-dom'

type Props = {
    cartData: {
        totalCount: number
    }
}

const NavMenu = ({ cartData }: Props) => {
    return (
        <div className="menu_container">
            <Button className="nav-button">
                <Link className="nav-button-link" to="/">
                    Головна
                </Link>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <Link className="nav-button-link" to="/certificate">
                    Сертифікати
                </Link>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <Link className="nav-button-link" to="/review">
                    Відгуки
                </Link>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <Link className="nav-button-link" to="/contact">
                    Контакти
                </Link>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <Link className="nav-button-link" to="/favorite">
                    <FavoriteIcon sx={{ color: 'tomato' }} /> 0
                </Link>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button shop_cart_icon">
                <Link className="nav-button-link" to="/cart">
                    <ShoppingCartIcon
                        className="shoppig_cart_icon"
                        sx={{ color: 'rgba(26,92,94,1)' }}
                    />
                    {cartData.totalCount}
                </Link>{' '}
            </Button>
        </div>
    )
}

export default NavMenu
