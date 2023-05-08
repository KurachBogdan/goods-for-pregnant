import productsArray, { Product, getProductObject } from 'utils/productsArray'
import { Button, Card, CardContent, Typography } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import DeleteIcon from '@mui/icons-material/Delete'
import './CartPageItem.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPageItem = ({
    changeProductQuantity,
    removeProductFromCart,
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => {
    // Object.keys(productsInCart).map((productId) => {
    //     const prodId = Number(productId) - 1;
    //     const { image, category, type, itemName, color, size, composition, term, price } = productsArray[prodId];
    //     return (

    //     )
    // })
    return (
        <>
            {Object.keys(productsInCart).length ? (
                Object.keys(productsInCart).map((productId) => (
                    <Card className="item_in_cart-container">
                        <div
                            key={productId}
                            style={{ width: '150px' }}
                            className="img_in_cart-container"
                        >
                            <img
                                alt="this_image"
                                src={productsObject[parseInt(productId)].image}
                            />
                        </div>
                        <CardContent sx={{ padding: '7px 14px 14px 7px' }}>
                            <div className="cart_title-container">
                                <p className="cart_type" key={productId}>
                                    {productsObject[parseInt(productId)].type}
                                </p>
                                <p key={productId}>
                                    {
                                        productsObject[parseInt(productId)]
                                            .itemName
                                    }
                                </p>
                            </div>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                }}
                                variant="body2"
                                color="text.secondary"
                            >
                                <span className="cart_before_a_colon">
                                    Колір:{' '}
                                </span>
                                <span key={productId}>
                                    {productsObject[parseInt(productId)].color}
                                </span>
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                }}
                                variant="body2"
                                color="text.secondary"
                            >
                                <span className="cart_before_a_colon">
                                    Розмір:{' '}
                                </span>
                                <span key={productId}>
                                    {productsObject[parseInt(productId)].size}
                                </span>{' '}
                                см
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                }}
                                variant="body2"
                                color="text.secondary"
                            >
                                <span className="cart_before_a_colon">
                                    Склад:{' '}
                                </span>
                                <span key={productId}>
                                    {
                                        productsObject[parseInt(productId)]
                                            .composition
                                    }
                                </span>
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                }}
                                variant="body2"
                                color="text.secondary"
                            >
                                <span className="cart_before_a_colon">
                                    Артикул:{' '}
                                </span>
                                <span key={productId}>
                                    {productsObject[parseInt(productId)].term}
                                </span>
                            </Typography>
                        </CardContent>
                        <div className="properties-container">
                            <p
                                className="product_count_in_cart"
                                key={productId}
                            >
                                Кількість:{' '}
                                <span>
                                    {productsInCart[parseInt(productId)]} шт.
                                </span>
                            </p>
                            <p
                                className="product_price_in_cart"
                                key={productId}
                            >
                                Сума:{' '}
                                <span>
                                    {`${
                                        productsObject[parseInt(productId)]
                                            .price *
                                        productsInCart[parseInt(productId)]
                                    } `}
                                    грн.
                                </span>
                            </p>
                            <Quantity
                                count={productsInCart[parseInt(productId)]}
                                onDecrement={() =>
                                    productsInCart[parseInt(productId)] <= 1
                                        ? removeProductFromCart(
                                              parseInt(productId)
                                          )
                                        : changeProductQuantity(
                                              productsObject[
                                                  parseInt(productId)
                                              ].id,
                                              productsInCart[
                                                  parseInt(productId)
                                              ] - 1
                                          )
                                }
                                onIncrement={() =>
                                    changeProductQuantity(
                                        productsObject[parseInt(productId)].id,
                                        productsInCart[parseInt(productId)] + 1
                                    )
                                }
                                minCount={0}
                            />
                        </div>
                        <Button
                            onClick={() =>
                                removeProductFromCart(parseInt(productId))
                            }
                            sx={{
                                width: '140px',
                                color: '#045540',
                                marginLeft: '49px',
                            }}
                            className="delete_from_cart_container"
                        >
                            <DeleteIcon />
                        </Button>
                    </Card>
                ))
            ) : (
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontFamily: `'Exo 2', sans-serif`,
                        fontSize: '21px',
                        fontWeight: 600,
                        color: '#105b63',
                        marginBottom: '21px',
                        cursor: 'context-menu',
                    }}
                    component="div"
                >
                    Ваш кошик порожній
                </Typography>
            )}
        </>
    )
}

export default CartPageItem
