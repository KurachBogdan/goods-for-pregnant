import { CardMedia, Dialog, Rating, Slide, Typography } from '@mui/material'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './CardItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import FavoriteCardItemExtended from './FavoriteCardItemExtended'

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

const FavoriteCardItem = ({
    id,
    image,
    type,
    itemName,
    color,
    size,
    composition,
    term,
    price,
    handleClick,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()
    const [open, setOpen] = React.useState(false)

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
                cursor: 'context-menu',
                borderRadius: '14px',
                border: '1px solid #105b63',
            }}
        >
            <CardMedia sx={{ height: 232 }} image={image} />
            <CardContent sx={{ margin: '0px' }}>
                <div className="card_title-container">
                    <p className="type">{type}</p>
                    <p>{itemName}</p>
                </div>
                <Typography
                    style={{ fontFamily: `'Sofia Sans Semi Condensed', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Колір: </span>
                    {color}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Sofia Sans Semi Condensed', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Розмір: </span>
                    {size} см
                </Typography>
                <Typography
                    style={{ fontFamily: `'Sofia Sans Semi Condensed', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Склад: </span>
                    {composition}
                </Typography>
                <Typography
                    style={{ fontFamily: `'Sofia Sans Semi Condensed', sans-serif` }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Артикул: </span>
                    {term}
                </Typography>
                <Typography
                    style={{
                        fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                        marginBottom: '3px',
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    <span className="before_a_colon">Ціна: </span>
                    <span className="price">{price} грн</span>
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
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
                    key={`product_${id}`}
                    onClick={() => handleClickOpen()}
                    variant="contained"
                    className="add_to_cart_btn"
                    size="small"
                >
                    Дізнатись більше
                </Button>
                <Dialog
                    maxWidth="lg"
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <FavoriteCardItemExtended
                        id={id}
                        handleClose={handleClose}
                        handleClick={handleClick}
                    />
                </Dialog>
            </CardActions>
        </Card>
    )
}

export default FavoriteCardItem
