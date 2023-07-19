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
            <Container className="card_item_extended-Container" maxWidth="lg">
                <div className="card_item_extended-container">
                    <img alt="Ooops..." src={product.image}></img>
                    <div className="card_item_extended-text_container">
                        <div className="card_item_extended-text_container_margin">
                            <div className="card_item_extended_title-container">
                                <p className="type">{product.type}</p>
                                <p>{product.itemName}</p>
                            </div>
                            <Typography className="card_item_extended-description">
                                <span className="card_item_extended_before_a_colon">
                                    Опис: <span style={{ margin: '0' }}></span>
                                </span>
                                {product.description}
                            </Typography>
                            <Typography
                                className="card_item_extended_product_color"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Колір:{' '}
                                </span>
                                {product.color}
                            </Typography>
                            <Typography
                                className="card_item_extended_product_size"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Розмір:{' '}
                                </span>
                                {product.size} см
                            </Typography>
                            <Typography
                                className="card_item_extended_product_composition"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Склад:{' '}
                                </span>
                                {product.composition}
                            </Typography>
                            <Typography
                                className="card_item_extended_product_term"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Артикул:{' '}
                                </span>
                                {product.term}
                            </Typography>
                            <Typography
                                className="card_item_extended_product_price"
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
                                        className="card_item_extended_leave_review"
                                        to="/review"
                                    >
                                        Залишити відгук
                                    </NavLink>
                                </Button>
                                <Button
                                    onClick={() => handleClick(id, 1)}
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
