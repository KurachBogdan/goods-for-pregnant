import { Button, Grid, Typography } from '@mui/material'
import './MainPart.scss'
import CategoryCard from 'components/CategoryCard/CategoryCard'
import categoriesArray from 'utils/categoriesArray'
import { Link } from 'react-router-dom'

type Props = {}

const MainPart = (props: Props) => {
    return (
        <div className="main_part-container">
            <Grid container spacing={3}>
                {categoriesArray.length ? (
                    categoriesArray.map(({ image, categoryName }, index) => (
                        <Grid item xs={4} md={4} key={`category_${index}`}>
                            <Button className="category_btn">
                                <Link className="category_btn_link" to="/categoryPage">
                                    <CategoryCard
                                        image={image}
                                        categoryName={categoryName}
                                    />
                                </Link>{' '}
                            </Button>
                        </Grid>
                    ))
                ) : (
                    <Typography className="category" component="div">
                        No any categories
                    </Typography>
                )}
            </Grid>
        </div>
    )
}
export default MainPart
