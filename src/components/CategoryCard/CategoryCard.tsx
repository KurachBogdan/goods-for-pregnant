import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import './CategoryCard.scss'

type Props = {
    image: string
    categoryName: string
}

const CategoryCard = ({ image, categoryName }: Props) => {
    return (
        <Card className="category_card_container">
            <CardMedia className="card_media" image={image} />
            <CardContent className="category_card_content">
                <Typography className="category" component="div">
                    {categoryName}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard
