import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import './CategoryCard.scss'

type Props = {
    image: string
    categoryName: string
}

const CategoryCard = ({ image, categoryName }: Props) => {
    return (
        <Card
            sx={{
                width: '250px',
                borderRadius: '14px',
                paddingBottom: '0px',
            }}
        >
            <CardMedia
                className="card_media"
                sx={{ height: 280, borderRadius: '14px' }}
                image={image}
            />
            <CardContent
                sx={{
                    paddingTop: '0px',
                    marginTop: '7px',
                    borderRadius: '14px',
                }}
            >
                <Typography className="category" component="div">
                    {categoryName}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard
