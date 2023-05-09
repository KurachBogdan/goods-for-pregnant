import { Button, Container, Typography } from '@mui/material'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {}

const ReviewsPage = (props: Props) => {
    return (
        <Container
            sx={{ padding: '21px 24px', minHeight: 'calc(100vh - 437px)' }}
            maxWidth="lg"
        >
            <ScrollToTopOnMount />
            <EveryPageTitle title="Відгуки" />
            <div>
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
                <Button
                    style={{ margin: '14px 0px 0px 0px' }}
                    onClick={() => window.history.back()}
                    variant="contained"
                    className="back_to_shopping"
                    size="small"
                >
                    Продовжити покупки
                </Button>
            </div>
        </Container>
    )
}

export default ReviewsPage
