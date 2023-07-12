import { Button, Container, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import productsArray from 'utils/productsArray'
import './FavoriteCardItemExtended.scss'

type Props = {
    id: number
    handleClose?: () => void
    handleClick: (id: number, count: number) => void
}

const FavoriteCardItemExtended = ({ handleClose, handleClick, id }: Props) => {
    const product = productsArray.find((item) => item.id === id)
    if (!product) {
        return <div>Не працює</div>
    }
    return (
        <>
            <ScrollToTopOnMount />
            <Container
                className="favorite_card_item_extended_Container"
                maxWidth="lg"
            >
                <div className="favorite_card_item_extended_container">
                    <img
                        className="favorite_card_item_extended_image"
                        alt="Ooops..."
                        src={product.image}
                    ></img>
                    <div className="favorite_card_item_extended_text_container">
                        <div className="favorite_card_item_extended_container_margin">
                            <div className="favorite_card_item_extended_title_container">
                                <p className="type">{product.type}</p>
                                <p>{product.itemName}</p>
                            </div>
                            <Typography className="favorite_card_item_extended_description">
                                <span className="card_item_extended_before_a_colon">
                                    Опис: <span style={{ margin: '0' }}></span>
                                </span>
                                {product.description}
                            </Typography>
                            <Typography
                                className="favorite_card_item_extended_color"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Колір:{' '}
                                </span>
                                {product.color}
                            </Typography>
                            <Typography
                                className="favorite_card_item_extended_size"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Розмір:{' '}
                                </span>
                                {product.size} см
                            </Typography>
                            <Typography
                                className="favorite_card_item_extended_composition"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Склад:{' '}
                                </span>
                                {product.composition}
                            </Typography>
                            <Typography
                                className="favorite_card_item_extended_term"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Артикул:{' '}
                                </span>
                                {product.term}
                            </Typography>
                            <Typography
                                className="favorite_card_item_extended_price"
                                variant="body2"
                            >
                                <span className="card_item_extended_before_a_colon">
                                    Ціна:{' '}
                                </span>
                                <span className="card_item_extended_price">
                                    {product.price} грн.
                                </span>
                            </Typography>
                            <div className="favorite_card_item_extended_btns_container">
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
                                        className="favorite_card_item_extended_btn_navlink"
                                        to="/review"
                                    >
                                        Залишити відгук
                                    </NavLink>
                                </Button>
                                <Button
                                    // onClick={() => handleClick(id, count)}
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

export default FavoriteCardItemExtended
