import { Button, Grid, Typography } from '@mui/material'
import './MainPart.scss'
import CategoryCard from 'components/CategoryCard/CategoryCard'
import categoriesArray from 'utils/categoriesArray'
import { useNavigate } from 'react-router-dom'

type Props = {}

const MainPart = (props: Props) => {
    const navigate = useNavigate()
    const handleLocation = (link: string) => {
        navigate(link)
    }
    return (
        <div className="main_part-container">
            <p>Категорії товарів</p>
            <div className="border_before_categories"></div>
            <Grid container spacing={3}>
                {categoriesArray.length ? (
                    categoriesArray.map(
                        ({ image, categoryName, link }, index) => (
                            <Grid
                                item
                                xs={7}
                                sm={6}
                                xl={4}
                                md={4}
                                key={`category_${index}`}
                            >
                                <Button
                                    className="category_btn"
                                    onClick={() =>
                                        handleLocation(`/category${link}`)
                                    }
                                >
                                    <CategoryCard
                                        image={image}
                                        categoryName={categoryName}
                                    />
                                </Button>
                            </Grid>
                        )
                    )
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
