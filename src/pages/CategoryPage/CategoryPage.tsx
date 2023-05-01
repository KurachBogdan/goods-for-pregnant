import CardItem from 'components/CardItem/CardItem'
import productsArray from 'utils/productsArray'
import { Container, Grid, Typography } from '@mui/material'

type Props = {}

const CategoryPage = (props: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '28px 0px' }}>
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