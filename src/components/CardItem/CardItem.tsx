import { CardMedia, IconButton, Typography } from '@mui/material'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './CardItem.scss'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {
    image: string
    type: string
    itemName: string
    color: string
    size: string
    composition: string
    term: number
    price: number
    addProductToCart: (count: number, price: number) => void
}

const CardItem = ({
    addProductToCart,
    image,
    type,
    itemName,
    color,
    size,
    composition,
    term,
    price,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const [isLiked, setIsLiked] = useState(false)
    const toggleLike = () => {
        setIsLiked(!isLiked)
    }

    return (
        <Card
            sx={{ maxWidth: 260, cursor: 'context-menu', borderRadius: '14px' }}
        >
            <CardMedia
                sx={{ height: 340 }}
                image={image}
            />
            <CardContent>
                <div className="card_title-container">
                    <p className="type">{type}</p>
                    <p>{itemName}</p>
                </div>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Колір: </span>
                    {color}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Розмір: </span>
                    {size} см
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Склад: </span>
                    {composition}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Артикул: </span>
                    {term}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Exo 2', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Ціна: </span>
                    <span className="price">{price} грн</span>
                </Typography>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <IconButton onClick={toggleLike} aria-label="add to favorites">
                    <FavoriteIcon
                        style={{ color: isLiked ? 'tomato' : 'grey' }}
                    />
                </IconButton>
                <Button
                    onClick={() => addProductToCart(count, price)}
                    variant="contained"
                    className="add_to_cart_btn"
                    size="small"
                >
                    Додати в корзину
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardItem
