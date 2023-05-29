import { TextField, TextareaAutosize } from '@mui/material'
import { Button, Card, CardContent, Container } from '@mui/material'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import { useState } from 'react'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import './ReviewsPage.scss'

type Props = {}

type Review = {
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
    return (
        <Container
            sx={{ padding: '21px 24px', minHeight: 'calc(100vh - 430px)' }}
            maxWidth="lg"
        >
            <ScrollToTopOnMount />
            <EveryPageTitle title="Відгуки" />
            <div className="reviews">
                <div>
                    {reviews.map((item, i) => (
                        <Card
                            className="comment-card"
                            variant="outlined"
                            sx={{ margin: '7px 0', display: 'flex', justifyContent: 'flex-start' }}
                            key={i}
                        >
                            <CardContent sx={{ width: '800px',  }}>
                                <strong>{item.name}:</strong>
                                <div>{item.email}</div>
                                <div>{item.text}</div>
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
                    <div>
                        <TextField
                            className="form_name_field"
                            label="Ім'я"
                            value={newReview.name}
                            onChange={handleName}
                        />
                    </div>
                    <br />
                    <div>
                        <TextareaAutosize
                            className="form_text_field"
                            minRows={7}
                            placeholder="Текст"
                            value={newReview.text}
                            onChange={handleText}
                        />
                    </div>
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
            <div>
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
