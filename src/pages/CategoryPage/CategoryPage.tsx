import { Container, Grid, Typography } from '@mui/material'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import CardItem from 'components/CardItem/CardItem'
import productsArray from 'utils/productsArray'

type Props = {
    handleClick: (id: number, count: number) => void
}

const CategoryPage = ({ handleClick }: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '28px 0px' }}>
            <ScrollToTopOnMount />
            <Grid container spacing={4.2}>
                {productsArray.length ? (
                    productsArray.map(
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
                    <Typography className="category" component="div">
                        No any items yet
                    </Typography>
                )}
            </Grid>
        </Container>
    )
}

export default CategoryPage
