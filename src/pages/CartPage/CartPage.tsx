import CartPageItem from 'components/CartPageItem/CartPageItem'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import { Button, Container } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'

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
    const hasItemsInCart = Object.keys(productsInCart).length > 0

    return (
        <div>
            <ScrollToTopOnMount />
            <Container className="cart_page_container" maxWidth="lg">
                <EveryPageTitle title="Кошик" />
                <CartPageItem
                    removeProductFromCart={removeProductFromCart}
                    productsInCart={productsInCart}
                    changeProductQuantity={changeProductQuantity}
                />
                <div className="cart_footer_desktop">
                    <BackToCategoriesBtn />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CartTotal productsInCart={productsInCart} />
                        {hasItemsInCart && (
                            <Button
                                className="make_purchases"
                                variant="contained"
                            >
                                <span className="make_purchases_btn_desktop">
                                    Оформити замовлення
                                </span>
                                <span className="make_purchases_btn_mobile">
                                    <ShoppingBasketRoundedIcon />
                                </span>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="cart_footer_mobile_container">
                    <CartTotal productsInCart={productsInCart} />
                    <div className="cart_footer_mobile">
                        <BackToCategoriesBtn />
                        {hasItemsInCart && (
                            <Button
                                className="make_purchases"
                                variant="contained"
                            >
                                <span className="make_purchases_btn_mobile">
                                    <ShoppingBasketRoundedIcon />
                                </span>
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
