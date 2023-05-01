import { CardContent, Typography } from "@mui/material"
import './CartPageDescriptionPart.scss'

type Props = {}

const CartPageDescriptionPart = (props: Props) => {
    return (
        <div>
            <CardContent>
                <div className="card_title-container">
                    <p className="type">Іграшка в'язана</p>
                    <p>"ЗАЙЧИК В ОКУЛЯРАХ"</p>
                </div>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Колір: </span>
                    персиковий
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Розмір: </span>
                    30 см
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Склад: </span>
                    поліестер 100%
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Артикул: </span>
                    550026
                </Typography>
            </CardContent>
        </div>
    )
}

export default CartPageDescriptionPart
