import CartPageItem from 'components/CartPageItem/CartPageItem'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import { Button, Container } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import { NavLink } from 'react-router-dom'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <div>
            <ScrollToTopOnMount />
            <Container
                maxWidth="lg"
                sx={{
                    padding: '21px 24px',
                    minHeight: 'calc(100vh - 437px)',
                    cursor: 'context-menu',
                }}
            >
                <EveryPageTitle title="Кошик" />
                <CartPageItem
                    removeProductFromCart={removeProductFromCart}
                    productsInCart={productsInCart}
                    changeProductQuantity={changeProductQuantity}
                />
                <div className="cart_footer">
                    <Button
                        onMouseDown={() => {
                            setTimeout(() => {
                                window.scrollTo({
                                    top: window.innerHeight - 49,
                                    behavior: 'smooth',
                                })
                            }, 490)
                        }}
                        variant="contained"
                        className="back_to_shopping"
                        size="small"
                    >
                        <NavLink className="back_to_categories_btn_link" to="/">
                            Продовжити покупки
                        </NavLink>
                    </Button>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CartTotal productsInCart={productsInCart} />
                        <Button className="make_purchases" variant="contained">
                            Оформити замовлення
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
