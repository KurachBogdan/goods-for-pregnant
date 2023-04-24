import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'
import './NavMenu.scss'

type Props = {}

const NavMenu = (props: Props) => {
    return (
        <div className="menu_container">
            <Button className="nav-button">Головна</Button>
            <Button className="nav-button">Сертифікати</Button>
            <Button className="nav-button">Відгуки</Button>
            <Button className="nav-button">Контакти</Button>
            <Button className="nav-button">
                <FavoriteIcon sx={{ color: 'tomato' }} />0
            </Button>
            <Button className="nav-button">
                <ShoppingCartIcon />0
            </Button>
        </div>
    )
}

export default NavMenu
