// import productsArray, { Product, getProductObject } from 'utils/productsArray'
import CartPageItem from 'components/CartPageItem/CartPageItem'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import { Container } from '@mui/material'
import './CartPage.scss'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <ScrollToTopOnMount />
            <Container maxWidth="lg" sx={{ padding: '21px 0px' }}>
                <CartPageItem productsInCart={productsInCart} />
                <CartTotal productsInCart={productsInCart} />
            </Container>
        </div>
    )
}

export default CartPage
