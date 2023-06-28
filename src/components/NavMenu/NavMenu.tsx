import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'
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
        <div className="menu">
            <ul>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
                    <Button className="nav-button">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'menu_itemActive' : 'nav-button-link'
                            }
                            to="/favorite"
                        >
                            <FavoriteIcon
                                sx={{
                                    color: 'rgba(69, 73, 77, .6)',
                                    whiteSpace: 'inherit',
                                }}
                            />
                            {likesCount}
                        </NavLink>{' '}
                    </Button>
                </li>
                <li>
                    <Button className="nav-button shop_cart_icon">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'menu_itemActive' : 'nav-button-link'
                            }
                            to="/cart"
                        >
                            <ShoppingCartIcon className="shoppig_cart_icon_color" />
                            {cartData.totalCount}
                        </NavLink>{' '}
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu
