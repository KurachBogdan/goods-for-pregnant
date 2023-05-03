import { CardContent, Typography } from '@mui/material'
import './CartPageDescriptionPart.scss'
import productsArray, { Product, getProductObject } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPageDescriptionPart = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => {
    return (
        <div>
            <CardContent>
                <div className="card_title-container">
                    <p className="type">
                        {Object.keys(productsInCart).map((productId) => (
                            <div key={productId}>
                                {productsObject[parseInt(productId)].type}
                            </div>
                        ))}
                    </p>
                    <p>
                        {Object.keys(productsInCart).map((productId) => (
                            <div key={productId}>
                                {productsObject[parseInt(productId)].itemName}
                            </div>
                        ))}
                    </p>
                </div>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Колір: </span>
                    {Object.keys(productsInCart).map((productId) => (
                        <span key={productId}>
                            {productsObject[parseInt(productId)].color}
                        </span>
                    ))}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Розмір: </span>
                    {Object.keys(productsInCart).map((productId) => (
                        <span key={productId}>
                            {productsObject[parseInt(productId)].size}
                        </span>
                    ))} см
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Склад: </span>
                    {Object.keys(productsInCart).map((productId) => (
                        <span key={productId}>
                            {productsObject[parseInt(productId)].composition}
                        </span>
                    ))}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Артикул: </span>
                    {Object.keys(productsInCart).map((productId) => (
                        <span key={productId}>
                            {productsObject[parseInt(productId)].term}
                        </span>
                    ))}
                </Typography>
            </CardContent>
        </div>
    )
}

export default CartPageDescriptionPart
