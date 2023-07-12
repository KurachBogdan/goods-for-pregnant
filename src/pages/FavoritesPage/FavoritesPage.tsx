import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import Container from '@mui/material/Container/Container'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import productsArray, { Product } from 'utils/productsArray'
import FavoriteCardItem from 'components/CardItem/FavoriteCardItem'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import './FavoritesPage.scss'

type Props = {
    handleClick: (id: number, count: number) => void
}

const FavoritesPage = ({ handleClick }: Props) => {
    const likedArticleIds = useAppSelector((state) =>
        Object.keys(state.productsLikeState)
            .filter((key) => state.productsLikeState[+key])
            .map((key) => parseInt(key))
    )

    const likedArticles: Product[] = productsArray.filter((product) =>
        likedArticleIds.includes(product.id)
    )

    return (
        <Container className="favorites_page_container" maxWidth="lg">
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
                                    handleClick={handleClick}
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
                    <div className="favorites_page_alternative_text">
                        Ще немає обраних товарів
                    </div>
                )}
            </Grid>
            <div style={{ marginTop: '21px' }}>
                <BackToCategoriesBtn />
            </div>
        </Container>
    )
}

export default FavoritesPage
