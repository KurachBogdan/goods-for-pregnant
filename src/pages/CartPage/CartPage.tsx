import CartPageItem from 'components/CartPageItem/CartPageItem'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import { Button, Container } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'

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
                <div className="cart_footer">
                    <BackToCategoriesBtn />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CartTotal productsInCart={productsInCart} />
                        {hasItemsInCart && (
                            <Button
                                className="make_purchases"
                                variant="contained"
                            >
                                Оформити замовлення
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
