import { Button, Container, Typography } from '@mui/material'
import './CardItemExtended.scss'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import productsArray from 'utils/productsArray'
import { NavLink } from 'react-router-dom'

type Props = {
    id: number
    handleClose?: () => void
    handleClick: (id: number, count: number) => void
    count: number
}

const CardItemExtended = ({ handleClose, handleClick, count, id }: Props) => {
    const product = productsArray.find((item) => item.id === id)
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
                <div className="card_item_extended-container">
                    <img alt="Ooops..." src={product.image}></img>
                    <div className="card_item_extended-text_container">
                        <div style={{ marginLeft: '24px' }}>
                            <div className="card_item_extended_title-container">
                                <p className="type">{product.type}</p>
                                <p>{product.itemName}</p>
                            </div>
                            <Typography
                                style={{
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                                    fontSize: '17px',
                                    lineHeight: '19px',
                                    marginTop: '14px',
                                    maxWidth: '350px',
                                    color: '#105b63',
                                }}
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Опис: <span style={{ margin: '0' }}></span>
                                </span>
                                {product.description}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
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
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
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
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
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
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
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
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                                    fontSize: '16px',
                                    marginBottom: '28px',
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
                                    className="card_item_extended_btn"
                                    size="small"
                                >
                                    <NavLink
                                        style={{
                                            textDecoration: 'none',
                                            fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                                            fontWeight: 600,
                                            color: 'white',
                                        }}
                                        to="/review"
                                    >
                                        Залишити відгук
                                    </NavLink>
                                </Button>
                                <Button
                                    onClick={() => handleClick(id, count)}
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
