import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import { Button, Card, CardContent, Container } from '@mui/material'
import { Rating, TextField, TextareaAutosize } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import SelectForm from 'components/SelectForm/SelectForm'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import Snackbar from '@mui/material/Snackbar'
import React, { useState } from 'react'
import './ReviewsPage.scss'

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
    const [openSnack, setOpenSnack] = useState(false)
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
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const [ratingValue, setRatingValue] = useState(0)
    const [isFormValid, setIsFormValid] = useState(false) // Доданий стан для валідації форми

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
        validateForm() // Валідація форми при зміні поля
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setNewReview((prevState) => ({
            ...prevState,
            text: value,
        }))
        validateForm() // Валідація форми при зміні поля
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setReviews((prevState) => {
            return [...prevState, newReview]
        })

        setNewReview({
            name: '',
            text: '',
        })
        setRatingValue(0)
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

    const validateForm = () => {
        // Валідація форми
        if (newReview.name.trim() !== '' && newReview.text.trim() !== '') {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
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
                    {reviews.map((user, i) => (
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
                                                src="/images/bedclothes_roslinka.jpg"
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
                                    <div className="text_area">{user.text}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
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
                        <SelectForm />
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
                            disabled={!isFormValid} // Додано властивість disabled на основі стану валідації форми
                        >
                            Відправити
                        </Button>
                        <Snackbar
                            open={openSnack}
                            autoHideDuration={800}
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
