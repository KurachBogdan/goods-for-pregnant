import { Button, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import Container from '@mui/material/Container/Container'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import productsArray, { Product } from 'utils/productsArray'
import FavoriteCardItem from 'components/CardItem/FavoriteCardItem'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'

type Props = {}

const FavoritesPage = (props: Props) => {
    const likedArticleIds = useAppSelector((state) =>
        Object.keys(state.productsLikeState)
            .filter((key) => state.productsLikeState[+key])
            .map((key) => parseInt(key))
    )

    const likedArticles: Product[] = productsArray.filter((product) =>
        likedArticleIds.includes(product.id)
    )

    return (
        <Container
            sx={{ padding: '21px 24px', minHeight: 'calc(100vh - 438px)' }}
            maxWidth="lg"
        >
            <ScrollToTopOnMount />
            <EveryPageTitle title="Подобається" />
            <Grid container spacing={4.2}>
                {likedArticles.length ? (
                    likedArticles.map(
                        ({
                            id,
                            image,
                            type,
                            itemName,
                            color,
                            size,
                            composition,
                            term,
                            price,
                        }) => (
                            <Grid item xs={12} sm={6} md={3} key={id}>
                                {' '}
                                <FavoriteCardItem
                                    id={id}
                                    image={image}
                                    type={type}
                                    itemName={itemName}
                                    color={color}
                                    size={size}
                                    composition={composition}
                                    term={term}
                                    price={price}
                                />
                            </Grid>
                        )
                    )
                ) : (
                    <div>
                        <Typography
                            sx={{
                                textTransform: 'none',
                                fontFamily: `'Exo 2', sans-serif`,
                                fontSize: '21px',
                                fontWeight: 600,
                                color: '#105b63',
                                margin: '34px 0px 21px 34px',
                                cursor: 'context-menu',
                            }}
                            component="div"
                        >
                            Ще немає обраних товарів
                        </Typography>
                        <Button
                            style={{ margin: '14px 0px 0px 34px' }}
                            onClick={() => window.history.back()}
                            variant="contained"
                            className="back_to_shopping"
                            size="small"
                        >
                            Продовжити покупки
                        </Button>
                    </div>
                )}
            </Grid>
        </Container>
    )
}

export default FavoritesPage
