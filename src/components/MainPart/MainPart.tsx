import { Button, Typography } from '@mui/material'
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
            <div className="main_part_flex_container">
                {categoriesArray.length ? (
                    categoriesArray.map(
                        ({ image, categoryName, link }, index) => (
                            <Button
                                key={`category_${index}`}
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
                        )
                    )
                ) : (
                    <Typography className="category" component="div">
                        No any categories
                    </Typography>
                )}
            </div>
        </div>
    )
}
export default MainPart
