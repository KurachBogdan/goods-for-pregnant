import { Rating, TextField, TextareaAutosize } from '@mui/material'
import { Button, Card, CardContent, Container } from '@mui/material'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import SelectForm from 'components/SelectForm/SelectForm'
import { useState } from 'react'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import './ReviewsPage.scss'

type Props = {}

export type Review = {
    name: string
    text: string
    email?: string
}

const ReviewsPage = (props: Props) => {
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

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert("Вкажіть Ваше ім'я та сам відгук")
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    const handleReviewSubmit = () => {
        if (newReview.name === '' || newReview.text === '') {
            alert("Вкажіть Ваше ім'я та сам відгук")
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
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
                <div
                    style={{
                        width: '800px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginRight: '49px',
                        alignItems: 'center',
                    }}
                >
                    {reviews.map((user, i) => (
                        <Card
                            className="comment-card"
                            variant="outlined"
                            sx={{ margin: '7px 0' }}
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
                <form onSubmit={onSend}>
                    <h3
                        style={{
                            fontFamily: `'Exo 2', sans-serif`,
                            fontSize: '21px',
                            color: '#105b63',
                        }}
                    >
                        Будь ласка, залиште відгук
                    </h3>
                    <form onSubmit={handleReviewSubmit}>
                        <TextField
                            className="form_name_field"
                            label="Ім'я"
                            value={newReview.name}
                            onChange={handleName}
                            required
                        />
                        <SelectForm />
                        <TextareaAutosize
                            className="form_text_field"
                            minRows={7}
                            placeholder="Ваш відгук"
                            value={newReview.text}
                            onChange={handleText}
                            required
                        />
                    </form>
                    <div style={{ textAlign: 'center', marginTop: '14px' }}>
                        <Button
                            className="form_btn"
                            type="submit"
                            variant="outlined"
                        >
                            Відправити
                        </Button>
                    </div>
                </form>
            </div>
            <div style={{ marginTop: '49px' }}>
                {/* <Typography
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
                </Typography> */}
                <BackToCategoriesBtn />
            </div>
        </Container>
    )
}

export default ReviewsPage
