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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'

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
        <Card className="card_item_card">
            <Button
                className="card_item_image_hover"
                key={`product_${id}`}
                onClick={() => handleClickOpen()}
                variant="text"
            >
                <CardMedia
                    className="card_item_card_media"
                    sx={{ height: 232, width: 260 }}
                    image={image}
                />
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
                className="card_item_content"
                sx={{
                    padding: '7px 14px',
                }}
            >
                <div className="card_title-container">
                    <p className="type hide_type">{type}</p>
                    <p>{itemName}</p>
                </div>
                <Typography
                    className="hide_color"
                    style={{
                        fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Колір: </span>
                    {color}
                </Typography>
                <Typography
                    className="hide_size"
                    style={{
                        fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Розмір: </span>
                    {size} см
                </Typography>
                <Typography
                    className="hide_composition"
                    style={{
                        fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Склад: </span>
                    {composition}
                </Typography>
                <Typography
                    className="hide_term"
                    style={{
                        fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Артикул: </span>
                    {term}
                </Typography>
                <Typography
                    className="card_item_price"
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Ціна: </span>
                    <span className="price">{price} грн</span>
                </Typography>
                <div className="rating">
                    <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                    />
                </div>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            </CardContent>
            <CardActions className="card_item-card_actions">
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
                <Button className="review_btn">
                    <RateReviewOutlinedIcon />
                </Button>
                <Button
                    onClick={() => handleClick(id, count)}
                    variant="contained"
                    className="add_to_cart_btn"
                    size="small"
                >
                    <span className="span-hide">Додати в корзину</span>
                    <span className="span-mobile">
                        <ShoppingCartIcon className='shopping_cart_btn_mobole'/>
                    </span>
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardItem
