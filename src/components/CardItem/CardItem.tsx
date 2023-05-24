import { CardMedia, Rating, Typography } from '@mui/material'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './CardItem.scss'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import CardItemExtended from './CardItemExtended'

type Props = {
    id: number
    image: string
    type: string
    itemName: string
    color: string
    size: string
    composition: string
    term: number
    price: number
    handleClick: (id: number, count: number) => void
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const CardItem = ({
    handleClick,
    id,
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
    const [open, setOpen] = useState(false)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Card
            sx={{
                maxWidth: 260,
                borderRadius: '14px',
                border: '1px solid #105b63',
                boxShadow: 'none',
            }}
        >
            <Button
                className="card_item_image_hover"
                key={`product_${id}`}
                onClick={() => handleClickOpen()}
                variant="text"
            >
                <CardMedia sx={{ height: 232, width: 260 }} image={image} />
            </Button>
            <Dialog
                maxWidth="lg"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <CardItemExtended
                    id={id}
                    count={count}
                    handleClose={handleClose}
                    handleClick={handleClick}
                />
            </Dialog>
            <CardContent
                sx={{
                    cursor: 'context-menu',
                    padding: '7px 14px',
                }}
            >
                <div className="card_title-container">
                    <p className="type">{type}</p>
                    <p>{itemName}</p>
                </div>
                <Typography
                    style={{
                        fontFamily: `'Exo 2', sans-serif`,
                    }}
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
                    style={{
                        fontFamily: `'Exo 2', sans-serif`,
                        marginBottom: '4px',
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Ціна: </span>
                    <span className="price">{price} грн</span>
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'space-between',
                    padding: '7px 14px 4px 14px',
                }}
            >
                <Button
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                    sx={{ borderRadius: '100%', minWidth: '36px' }}
                    variant="text"
                >
                    {isLiked ? (
                        <FavoriteIcon sx={{ color: 'tomato' }} />
                    ) : (
                        <FavoriteBorderIcon sx={{ color: 'grey' }} />
                    )}
                </Button>
                <Button
                    onClick={() => handleClick(id, count)}
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
