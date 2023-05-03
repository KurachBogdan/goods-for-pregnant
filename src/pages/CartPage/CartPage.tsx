import productsArray, { Product, getProductObject } from 'utils/productsArray'
import CartPageItem from 'components/CartPageItem/CartPageItem'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import { Container } from '@mui/material'
import './CartPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => {
    return (
        <div>
            <ScrollToTopOnMount />
            <Container maxWidth="lg" sx={{ padding: '21px 0px' }}>
                <CartPageItem
                    productsInCart={productsInCart}
                    productsObject={productsObject}
                />
                <div className="total_price_in_cart">
                    Загальна вартість:{' '}
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsObject[parseInt(productId)].price *
                                productsInCart[parseInt(productId)],
                        0
                    )}{' '}
                    грн.
                </div>
            </Container>
        </div>
    )
}

export default CartPage
