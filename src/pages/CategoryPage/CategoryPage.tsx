import { Container, Typography } from '@mui/material'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import CardItem from 'components/CardItem/CardItem'
import productsArray from 'utils/productsArray'
import { useParams } from 'react-router-dom'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import categoriesArray, { Category } from 'utils/categoriesArray'
import './CategoryPage.scss'

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
                return '/images/diapers_background.webp'
            case 'bibs':
                return '/images/bibs_background.webp'
            case 'pregnant':
                return '/images/pregnant_background.webp'
            case 'toys':
                return '/images/toys_background.webp'
            case 'presbox':
                return '/images/presbox_background.webp'
            case 'textile':
                return '/images/textile_background.webp'
            case 'body':
                return '/images/body_background.webp'
            case 'towels':
                return '/images/towels_background.webp'
            case 'cocoons':
                return '/images/cocoons_background.webp'
            default:
                break
        }
    }

    return (
        <div
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
                <div className="category_page_flex_container">
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
                                    key={id}
                                />
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
                                className="category_page_alternative_message"
                                component="div"
                            >
                                Ще немає товарів цієї категорії
                            </Typography>
                        </div>
                    )}
                </div>
                <div style={{ marginTop: '35px' }}>
                    <BackToCategoriesBtn />
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage
