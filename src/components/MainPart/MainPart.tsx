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
            <p
                style={{
                    fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
                    fontSize: '35px',
                    lineHeight: '35px',
                    fontWeight: 600,
                    color: '#105b63',
                    cursor: 'context-menu',
                    margin: '0px 0px 0px 0px'
                }}
            >
                Категорії товарів
            </p>
            <div className='border_before_categories'
                style={{
                    width: '100%',
                    border: '3px solid #105b63',
                    borderRadius: '3px',
                    marginTop: '7px',
                    marginBottom: '14px',
                }}
            ></div>
            <Grid container spacing={3}>
                {categoriesArray.length ? (
                    categoriesArray.map(
                        ({ image, categoryName, link }, index) => (
                            <Grid item xs={7} sm={6} xl={4} md={4} key={`category_${index}`}>
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
