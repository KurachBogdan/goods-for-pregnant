import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import './CategoryCard.scss'

type Props = {
    image: string
    categoryName: string
}

const CategoryCard = ({ image, categoryName }: Props) => {
    return (
        <Card className='category_card_mobile'
            sx={{
                width: '264px',
                borderRadius: '14px',
                paddingBottom: '0px',
            }}
        >
            <CardMedia
                className="card_media"
                sx={{ height: '207px' }}
                image={image}
            />
            <CardContent
                sx={{
                    paddingTop: '7px',
                    // marginTop: '7px',
                    // borderRadius: '14px',
                    backgroundColor: '#105b63',
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
