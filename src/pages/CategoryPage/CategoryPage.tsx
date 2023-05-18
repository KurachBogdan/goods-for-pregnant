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

    // const setBackground = () => {
    //     switch (categoryId) {
    //         case 'diapers':
    //             return '/images/pregnant.jpg'
    //         case '/bibs':
    //             return '/images/pregnant.jpg'
    //         case 'pregnant':
    //             return '/images/pregnant.jpg'
    //         case 'toys':
    //             return '/public/images/toys_accessories.jpg'
    //         case 'presbox':
    //             return '/images/pregnant.jpg'
    //         case 'textile':
    //             return '/images/pregnant.jpg'
    //         case 'body':
    //             return '/images/pregnant.jpg'
    //         case 'towels':
    //             return '/images/pregnant.jpg'
    //         case 'cocoons':
    //             return '/images/pregnant.jpg'
    //         default:
    //             break
    //     }
    // }
    return (
        <Container
            maxWidth="lg"
            sx={{ padding: '21px 24px' /*, backgroundImage: setBackground()*/ }}
        >
            <ScrollToTopOnMount />
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
                            <Grid item xs={12} sm={6} md={3} key={id}>
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
                                fontFamily: `'Exo 2', sans-serif`,
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
    )
}

export default CategoryPage
