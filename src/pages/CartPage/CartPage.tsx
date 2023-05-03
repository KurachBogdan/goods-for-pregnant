import { Button, Container } from '@mui/material'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import './CartPage.scss'
import CartPageDescriptionPart from 'components/CartPageDescriptionPart/CartPageDescriptionPart'
// import Quantity from 'components/Quantity/Quantity'
import DeleteIcon from '@mui/icons-material/Delete'
import productsArray, { Product, getProductObject } from 'utils/productsArray'

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
            <Container sx={{ padding: '28px 0px' }} maxWidth="lg">
                <div className="item_in_cart-container">
                    <div className="img_in_cart-container"></div>
                    <CartPageDescriptionPart productsInCart={productsInCart} />
                    <div className="properties-container">
                            {Object.keys(productsInCart).map((productId) => (
                                <p className="product_count_in_cart" key={productId}>
                                    Кількість:{' '}
                                    {productsInCart[parseInt(productId)]} шт.
                                </p>
                            ))}
                            {Object.keys(productsInCart).map((productId) => (
                                <p className="product_price_in_cart" key={productId}>
                                Вартість:{' '}
                                    {productsObject[parseInt(productId)].price} грн
                                </p>
                            ))}
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
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].type}{' '}
                        {productsObject[parseInt(productId)].itemName}:{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartPage
