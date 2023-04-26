export type Article = {
    id: number
    image: string
    categoryName: string
}

const categoriesArray: Article[] = [
    {
        id: 1,
        image: '/images/new.jpg',
        categoryName: 'Новинки'
    },
    {
        id: 2,
        image: '/images/sale.jpg',
        categoryName: 'Акції'
    },
    {
        id: 3,
        image: '/images/for_pregnant.jpg',
        categoryName: 'Для вагітних'
    },
    {
        id: 4,
        image: '/images/toys_accessories.jpg',
        categoryName: 'Іграшки та аксесуари'
    },
    {
        id: 5,
        image: '/images/present-boxes.jpg',
        categoryName: 'Подарункові бокси'
    },
    {
        id: 6,
        image: '/images/kids_textile.jpg',
        categoryName: 'Дитячий текстиль'
    },
    {
        id: 7,
        image: '/images/body.jpg',
        categoryName: 'Боді'
    },
    {
        id: 8,
        image: '/images/towels.jpg',
        categoryName: 'Крижми, рушники'
    },
    {
        id: 9,
        image: '/images/cocoons.jpg',
        categoryName: 'Кокони'
    },
]

export default categoriesArray