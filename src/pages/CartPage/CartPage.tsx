import { Container } from '@mui/material'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import './CartPage.scss'
import CartPageDescriptionPart from 'components/CartPageDescriptionPart/CartPageDescriptionPart'
import Quantity from 'components/Quantity/Quantity'

type Props = {}

const CartPage = (props: Props) => {
    return (
        <div>
            <ScrollToTopOnMount />
            <Container sx={{ padding: '28px 0px' }} maxWidth="lg">
                <div className="item_in_cart-container">
                    <div className="img_in_cart-container"></div>
                    <CartPageDescriptionPart />
                    <div className="properties-container">
                        <p className="product_count_in_cart"></p>
                        <p className="product_price_in_cart"></p>
                        {/* <Quantity
                            count={count}
                            onDecrement={onDecrement}
                            onIncrement={onIncrement}
                        /> */}
                    </div>
                    <div className="delete_from_cart_container"></div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
