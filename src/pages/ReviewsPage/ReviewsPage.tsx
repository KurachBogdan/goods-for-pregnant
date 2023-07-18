import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import { Button, Card, CardContent, Container, Typography } from '@mui/material'
import { Rating, TextField, TextareaAutosize } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import Snackbar from '@mui/material/Snackbar'
import React, { useEffect, useState, useCallback } from 'react'
import './ReviewsPage.scss'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import productsArray from 'utils/productsArray'

export type Review = {
    name: string
    text: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ReviewsPage: React.FC = () => {
    const arrReviews: Review[] = [
        {
            name: 'Ольга Б.',
            text: 'Подушка дуже чудова і практична. Дитина на ній солодко спить. Та і я теж полюбляю на ній лежати) Дуже задоволена і, звісно ж, рекомендую!',
        },
        {
            name: 'Олеся',
            text: 'Дитина в захваті. Чудова іграшка!',
        },
        {
            name: 'Яна К.',
            text: "Дуже м'який пледик, на зиму те що треба",
        },
        {
            name: 'Марія',
            text: 'Круті патріотичні бодіки. Я задоволена.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [product, setProduct] = React.useState('')
    const [newReview, setNewReview] = useState<Review>({ name: '', text: '' })
    const [isFormValid, setIsFormValid] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [ratingValue, setRatingValue] = useState(0)

    const validateForm = useCallback(() => {
        setIsFormValid(
            newReview.name.trim() !== '' &&
                newReview.text.trim() !== '' &&
                product.trim() !== ''
        )
    }, [newReview.name, newReview.text, product])

    useEffect(() => {
        validateForm()
    }, [validateForm])

    const handleProduct = (event: SelectChangeEvent) => {
        const { value } = event.target
        setProduct(value as string)
        validateForm()
    }

    const handleRatingChange = (
        event: React.ChangeEvent<{}>,
        value: number | null
    ) => {
        if (value !== null) {
            setRatingValue(value)
            console.log('Значення рейтингу:', value)
        }
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setNewReview((prevState) => ({
            ...prevState,
            name: value,
        }))
        validateForm()
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setNewReview((prevState) => ({
            ...prevState,
            text: value,
        }))
        validateForm()
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setReviews((prevState) => {
            return [newReview, ...prevState]
        })

        setNewReview({
            name: '',
            text: '',
        })
        setRatingValue(0)

        validateForm()
    }

    const handleOpenSnack = () => {
        setOpenSnack(true)
    }

    const handleCloseSnack = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenSnack(false)
    }

    return (
        <Container
            sx={{ padding: '21px 24px', minHeight: 'calc(100vh - 430px)' }}
            maxWidth="lg"
        >
            <ScrollToTopOnMount />
            <EveryPageTitle title="Відгуки" />
            <div className="reviews">
                <div className="comment-card-container">
                    {reviews.length ? (
                        reviews.map((user, i) => (
                            <Card
                                className="comment-card"
                                variant="outlined"
                                key={i}
                            >
                                <CardContent>
                                    <div className="review_card">
                                        <div className="review_card_container">
                                            <div className="review_card_contain">
                                                <img
                                                    src="/images/bedclothes_roslinka.webp"
                                                    alt="#"
                                                />
                                            </div>
                                            <p>{user.name}</p>
                                            <Rating
                                                name="half-rating"
                                                defaultValue={2.5}
                                                precision={0.5}
                                            />
                                        </div>
                                        <div className="text_area">
                                            {user.text}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography
                            sx={{
                                textTransform: 'none',
                                fontFamily: `'Exo 2', sans-serif`,
                                fontSize: '21px',
                                fontWeight: 600,
                                color: '#105b63',
                                margin: '0px 0px 21px 0px',
                                cursor: 'context-menu',
                            }}
                            component="div"
                        >
                            Ще немає відгуків
                        </Typography>
                    )}
                </div>
                <form className="review_form" onSubmit={onSend}>
                    <h3>Будь ласка, залиште відгук</h3>
                    <TextField
                        className="form_name_field"
                        label="Ім'я"
                        value={newReview.name}
                        onChange={handleName}
                        required
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '7px 0px',
                        }}
                    >
                        <Box sx={{ width: '154px' }}>
                            <FormControl fullWidth>
                                <InputLabel
                                    className="input_label"
                                    id="demo-simple-select-label"
                                >
                                    Оберіть товар
                                </InputLabel>
                                <Select
                                    sx={{
                                        height: '35px',
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={product}
                                    label="Оберіть товар"
                                    onChange={handleProduct}
                                    required
                                >
                                    {productsArray.map(
                                        ({ id, type, itemName }) => (
                                            <MenuItem
                                                key={id}
                                                value={`${type} ${itemName}`}
                                            >{`${type} ${itemName}`}</MenuItem>
                                        )
                                    )}
                                </Select>
                            </FormControl>
                        </Box>
                        <div className="leave_rating">
                            <p className="leave_rating_title">Оцінка</p>
                            <Rating
                                name="half-rating"
                                precision={0.5}
                                value={ratingValue}
                                onChange={handleRatingChange}
                            />
                        </div>
                    </div>
                    <TextareaAutosize
                        className="form_text_field"
                        minRows={7}
                        placeholder="Ваш відгук"
                        value={newReview.text}
                        onChange={handleText}
                        required
                    />
                    <div style={{ textAlign: 'center', marginTop: '14px' }}>
                        <Button
                            className="form_btn"
                            type="submit"
                            variant="outlined"
                            onClick={handleOpenSnack}
                            disabled={!isFormValid}
                        >
                            Відправити
                        </Button>
                        <Snackbar
                            open={openSnack}
                            autoHideDuration={2000}
                            onClose={handleCloseSnack}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Alert severity="success" sx={{ width: '100%' }}>
                                Дякуємо за Ваш відгук!
                            </Alert>
                        </Snackbar>
                    </div>
                </form>
            </div>
            <div style={{ marginTop: '49px' }}>
                <BackToCategoriesBtn />
            </div>
        </Container>
    )
}

export default ReviewsPage
