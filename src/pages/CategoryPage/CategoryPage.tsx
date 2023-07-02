import { Container, Grid, Typography } from '@mui/material'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import CardItem from 'components/CardItem/CardItem'
import productsArray from 'utils/productsArray'
import { useParams } from 'react-router-dom'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import categoriesArray, { Category } from 'utils/categoriesArray'

type Props = {
    handleClick: (id: number, count: number) => void
}

const CategoryPage = ({ handleClick }: Props) => {
    const { categoryId } = useParams()
    const filteredArray = productsArray.filter(
        ({ category }) => categoryId === category
    )
    const category: Category | undefined = categoriesArray.find(
        ({ link }) => link === `/${categoryId}`
    )
    const categoryName = category ? category.categoryName : 'Категорія товарів'
    const setBackground = () => {
        switch (categoryId) {
            case 'diapers':
                return '/images/diapers_background.jpg'
            case 'bibs':
                return '/images/bibs_background.jpg'
            case 'pregnant':
                return '/images/pregnant_background.jpg'
            case 'toys':
                return '/images/toys_background.jpg'
            case 'presbox':
                return '/images/presbox_background.jpg'
            case 'textile':
                return '/images/textile_background.jpg'
            case 'body':
                return '/images/body_background.jpg'
            case 'towels':
                return '/images/towels_background.jpg'
            case 'cocoons':
                return '/images/cocoons_background.jpg'
            default:
                break
        }
    }

    return (
        <div
            className="category_page_background"
            style={{
                background: `url(${setBackground()}) center/cover no-repeat`,
            }}
        >
            <ScrollToTopOnMount />
            <Container
                maxWidth="lg"
                sx={{
                    padding: '21px 24px',
                }}
            >
                <EveryPageTitle title={categoryName} />
                <Grid container spacing={4.2}>
                    {filteredArray.length ? (
                        filteredArray.map(
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
                                <Grid sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                }} item xs={6} sm={6} md={3} key={id}>
                                    <CardItem
                                        id={id}
                                        handleClick={handleClick}
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
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '0 auto',
                            }}
                        >
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                                    fontSize: '21px',
                                    fontWeight: 600,
                                    color: '#105b63',
                                    lineHeight: '350px',
                                    cursor: 'context-menu',
                                    textAlign: 'center',
                                    minHeight: 'calc(100vh - 530px)',
                                }}
                                component="div"
                            >
                                Ще немає товарів цієї категорії
                            </Typography>
                        </div>
                    )}
                </Grid>
                <div style={{ marginTop: '35px' }}>
                    <BackToCategoriesBtn />
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage
