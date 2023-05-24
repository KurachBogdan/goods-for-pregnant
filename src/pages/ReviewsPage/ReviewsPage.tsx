import { Container, Typography } from '@mui/material'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
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
                <BackToCategoriesBtn />
            </div>
        </Container>
    )
}

export default ReviewsPage
