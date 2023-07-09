import productsArray, { Product, getProductObject } from 'utils/productsArray'
import { Button, Card, CardContent, Typography } from '@mui/material'
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
                    <Card
                        className="cart_page_item-container"
                        key={productsObject[parseInt(productId)].id}
                    >
                        <div className="cart_page_item-container_part_1">
                            {/* <div> */}
                                <img
                                    className="cart_page_item-image"
                                    alt="this_image"
                                    src={
                                        productsObject[parseInt(productId)]
                                            .image
                                    }
                                />
                            {/* </div> */}
                            <CardContent className="page_item-card_content">
                                <div className="cart_title-container">
                                    <p className="cart_type">
                                        {
                                            productsObject[parseInt(productId)]
                                                .type
                                        }
                                    </p>
                                    <p>
                                        {
                                            productsObject[parseInt(productId)]
                                                .itemName
                                        }
                                    </p>
                                </div>
                                <Typography
                                    className="cart_page_item-description need_to_hide"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <span className="cart_before_a_colon">
                                        Колір:{' '}
                                    </span>
                                    <span key={productId}>
                                        {
                                            productsObject[parseInt(productId)]
                                                .color
                                        }
                                    </span>
                                </Typography>
                                <Typography
                                    className="cart_page_item-description need_to_hide"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <span className="cart_before_a_colon">
                                        Розмір:{' '}
                                    </span>
                                    <span>
                                        {
                                            productsObject[parseInt(productId)]
                                                .size
                                        }
                                    </span>{' '}
                                    см
                                </Typography>
                                <Typography
                                    className="cart_page_item-description need_to_hide"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <span className="cart_before_a_colon">
                                        Склад:{' '}
                                    </span>
                                    <span>
                                        {
                                            productsObject[parseInt(productId)]
                                                .composition
                                        }
                                    </span>
                                </Typography>
                                <Typography
                                    className="cart_page_item-description need_to_hide"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <span className="cart_before_a_colon">
                                        Артикул:{' '}
                                    </span>
                                    <span>
                                        {
                                            productsObject[parseInt(productId)]
                                                .term
                                        }
                                    </span>
                                </Typography>
                            </CardContent>
                        </div>
                        <div className="cart_page_item-container_part_2">
                            <div className="properties-container">
                                <div className="cart_title-container_2">
                                    <p className="cart_type">
                                        {
                                            productsObject[parseInt(productId)]
                                                .type
                                        }
                                    </p>
                                    <p>
                                        {
                                            productsObject[parseInt(productId)]
                                                .itemName
                                        }
                                    </p>
                                </div>
                                <p className="product_count_in_cart">
                                    <span>Кількість:</span>{' '}
                                    <span className="this_count">
                                        {productsInCart[parseInt(productId)]}{' '}
                                        шт.
                                    </span>
                                </p>
                                <p className="product_price_in_cart">
                                    <span>Сума:</span>{' '}
                                    <span className="this_count">
                                        {`${
                                            productsObject[parseInt(productId)]
                                                .price *
                                            productsInCart[parseInt(productId)]
                                        } `}
                                        грн.
                                    </span>
                                </p>
                                <div className="cpi_product-quantity">
                                    <button
                                        className="cpi_on-decrement_btn"
                                        onClick={() =>
                                            productsInCart[
                                                parseInt(productId)
                                            ] <= 1
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
                                        disabled={
                                            productsInCart[
                                                parseInt(productId)
                                            ] <= 0
                                        }
                                    >
                                        -
                                    </button>
                                    <p className="cpi_text-field">
                                        {productsInCart[parseInt(productId)]}
                                    </p>
                                    <button
                                        className="cpi_on-increment_btn"
                                        onClick={() =>
                                            changeProductQuantity(
                                                productsObject[
                                                    parseInt(productId)
                                                ].id,
                                                productsInCart[
                                                    parseInt(productId)
                                                ] + 1
                                            )
                                        }
                                        disabled={
                                            productsInCart[
                                                parseInt(productId)
                                            ] >= 21
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <Button
                                className="cart_page_item-delete_btn"
                                onClick={() =>
                                    removeProductFromCart(parseInt(productId))
                                }
                                sx={{ color: '#045540' }}
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    </Card>
                ))
            ) : (
                <Typography
                    sx={{
                        textTransform: 'none',
                        fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
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
