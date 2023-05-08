type Props = {}

const FavoritesPage = (props: Props) => {
    return <div>FavoritesPage</div>
}

export default FavoritesPage
// import {
//     Button,
//     Card,
//     CardActions,
//     CardContent,
//     CardMedia,
//     IconButton,
//     Typography,
// } from '@mui/material'
// // import { useAppSelector } from 'redux/hooks'
// import FavoriteIcon from '@mui/icons-material/Favorite'

// type Props = {
//     id: number
//     image: string
//     type: string
//     itemName: string
//     color: string
//     size: string
//     composition: string
//     term: number
//     price: number
// }

// const FavoritesPage = ({
//     id,
//     image,
//     type,
//     itemName,
//     color,
//     size,
//     composition,
//     term,
//     price,
// }: Props) => {
//     return (
//         <Card
//             sx={{ maxWidth: 260, cursor: 'context-menu', borderRadius: '14px' }}
//         >
//             <CardMedia sx={{ height: 340 }} image={image} />
//             <CardContent>
//                 <div className="card_title-container">
//                     <p className="type">{type}</p>
//                     <p>{itemName}</p>
//                 </div>
//                 <Typography
//                     style={{ fontFamily: `'Exo 2', sans-serif` }}
//                     variant="body2"
//                     color="text.secondary"
//                 >
//                     <span className="before_a_colon">Колір: </span>
//                     {color}
//                 </Typography>
//                 <Typography
//                     style={{ fontFamily: `'Exo 2', sans-serif` }}
//                     variant="body2"
//                     color="text.secondary"
//                 >
//                     <span className="before_a_colon">Розмір: </span>
//                     {size} см
//                 </Typography>
//                 <Typography
//                     style={{ fontFamily: `'Exo 2', sans-serif` }}
//                     variant="body2"
//                     color="text.secondary"
//                 >
//                     <span className="before_a_colon">Склад: </span>
//                     {composition}
//                 </Typography>
//                 <Typography
//                     style={{ fontFamily: `'Exo 2', sans-serif` }}
//                     variant="body2"
//                     color="text.secondary"
//                 >
//                     <span className="before_a_colon">Артикул: </span>
//                     {term}
//                 </Typography>
//                 <Typography
//                     style={{ fontFamily: `'Exo 2', sans-serif` }}
//                     variant="body2"
//                     color="text.secondary"
//                 >
//                     <span className="before_a_colon">Ціна: </span>
//                     <span className="price">{price} грн</span>
//                 </Typography>
//             </CardContent>
//             <CardActions sx={{ justifyContent: 'space-between' }}>
//                 <IconButton onClick={toggleLike} aria-label="add to favorites">
//                     <FavoriteIcon
//                         style={{ color: isLiked ? 'tomato' : 'grey' }}
//                     />
//                 </IconButton>
//                 <Button
//                     variant="contained"
//                     className="add_to_cart_btn"
//                     size="small"
//                 >
//                     Додати в корзину
//                 </Button>
//             </CardActions>
//         </Card>
//     )
// }

// export default FavoritesPage
