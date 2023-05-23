import { Button, Container, Typography } from '@mui/material'
import './CardItemExtended.scss'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {
    handleClose?: () => void
}

const CardItemExtended = ({ handleClose }: Props) => {
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
                        src="/images/cocoon_1.jpg"
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
                                <p className="type">Кокон двосторонній</p>
                                <p>"ОБІЙМИ ЗВІРЯТ"</p>
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
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorum voluptatibus similique
                                quasi eos mollitia nihil amet qui cum neque
                                sapiente nobis laudantium optio ipsum architecto
                                possimus laboriosam, veniam facilis.
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
                                пісок, принт
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
                                універсальний, регулюється
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
                                бавовна, холлофайбер
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
                                660029
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
                                    880 грн
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
