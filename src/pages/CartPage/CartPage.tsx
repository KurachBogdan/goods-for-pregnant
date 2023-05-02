import { Button, Container } from '@mui/material'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import './CartPage.scss'
import CartPageDescriptionPart from 'components/CartPageDescriptionPart/CartPageDescriptionPart'
// import Quantity from 'components/Quantity/Quantity'
import DeleteIcon from '@mui/icons-material/Delete'

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
                        <p className="product_count_in_cart">Кількість: 1</p>
                        <p className="product_price_in_cart">Ціна: 100</p>
                        {/* <Quantity
                            count={count}
                            onDecrement={onDecrement}
                            onIncrement={onIncrement}
                        /> */}
                    </div>
                    <Button className="delete_from_cart_container">
                        <DeleteIcon />
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
