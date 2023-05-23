import { Button, Container, Typography } from '@mui/material'
import './CardItemExtended.scss'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import productsArray from 'utils/productsArray'

type Props = {
    id: number
    handleClose?: () => void
}

const CardItemExtended = ({ handleClose, id }: Props) => {
    const product = productsArray.find((item) => item.id === id)
    console.log(product)
    if (!product) {
        return <div>Не працює</div>
    }
    return (
        <>
            <ScrollToTopOnMount />
            <Container
                maxWidth="lg"
                sx={{
                    padding: '21px 24px',
                    cursor: 'context-menu',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                    }}
                >
                    <img
                        alt="Ooops..."
                        src={product.image}
                        style={{
                            width: '43vw',
                        }}
                    ></img>
                    <div
                        style={{
                            width: '450px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'blueviolet',
                        }}
                    >
                        <div style={{ marginLeft: '24px' }}>
                            <div className="card_item_extended_title-container">
                                <p className="type">{product.type}</p>
                                <p>{product.itemName}</p>
                            </div>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                    fontSize: '16px',
                                    marginTop: '14px',
                                    maxWidth: '350px',
                                    color: '#105b63',
                                }}
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Опис: <span></span>
                                </span>
                                {product.description}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                    fontSize: '16px',
                                    marginTop: '9px',
                                    color: '#105b63',
                                }}
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Колір:{' '}
                                </span>
                                {product.color}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                    fontSize: '16px',
                                    color: '#105b63',
                                }}
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Розмір:{' '}
                                </span>
                                {product.size} см
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                    fontSize: '16px',
                                    color: '#105b63',
                                }}
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Склад:{' '}
                                </span>
                                {product.composition}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                    fontSize: '16px',
                                    color: '#105b63',
                                }}
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Артикул:{' '}
                                </span>
                                {product.term}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Exo 2', sans-serif`,
                                    fontSize: '16px',
                                    marginBottom: '49px',
                                    color: '#105b63',
                                }}
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Ціна:{' '}
                                </span>
                                <span className="card_item_extended_price">
                                    {product.price} грн.
                                </span>
                            </Typography>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Button
                                    onClick={handleClose}
                                    variant="contained"
                                    className="card_item_extended_btn"
                                    size="small"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="contained"
                                    className="card_item_extended_btn blink"
                                    size="small"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CardItemExtended
