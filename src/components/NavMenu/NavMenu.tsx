import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'
import './NavMenu.scss'
import { NavLink } from 'react-router-dom'
import { selectLikesCount } from 'redux/likeReducer'
import { useAppSelector } from 'redux/hooks'

type Props = {
    cartData: {
        totalCount: number
    }
}

const NavMenu = ({ cartData }: Props) => {
    const likesCount = useAppSelector(selectLikesCount)

    return (
        <div className="menu_container">
            <Button className="nav-button">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'menu_itemActive' : 'nav-button-link'
                    }
                    to="/"
                >
                    Головна
                </NavLink>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'menu_itemActive' : 'nav-button-link'
                    }
                    to="/certificate"
                >
                    Сертифікати
                </NavLink>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'menu_itemActive' : 'nav-button-link'
                    }
                    to="/review"
                >
                    Відгуки
                </NavLink>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'menu_itemActive' : 'nav-button-link'
                    }
                    to="/contact"
                >
                    Контакти
                </NavLink>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'menu_itemActive' : 'nav-button-link'
                    }
                    to="/favorite"
                >
                    <FavoriteIcon sx={{ color: 'tomato' }} />
                    {likesCount}
                </NavLink>{' '}
            </Button>
            <div className="border_between_links"></div>
            <Button className="nav-button shop_cart_icon">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'menu_itemActive' : 'nav-button-link'
                    }
                    to="/cart"
                >
                    <ShoppingCartIcon
                        className="shoppig_cart_icon"
                        sx={{ color: 'rgba(26,92,94,1)' }}
                    />
                    {cartData.totalCount}
                </NavLink>{' '}
            </Button>
        </div>
    )
}

export default NavMenu
