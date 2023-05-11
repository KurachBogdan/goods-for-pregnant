export type Category = {
    id: number
    image: string
    categoryName: string
    link: string
}

const categoriesArray: Category[] = [
    {
        id: 1,
        image: '/images/diapers.jpg',
        categoryName: 'Пелюшки',
        link: '/diapers',
    },
    {
        id: 2,
        image: '/images/bibs.jpg',
        categoryName: 'Нагрудники',
        link: '/bibs',
    },
    {
        id: 3,
        image: '/images/for_pregnant.jpg',
        categoryName: 'Для вагітних',
        link: '/pregnant',
    },
    {
        id: 4,
        image: '/images/toys_accessories.jpg',
        categoryName: 'Іграшки та аксесуари',
        link: '/toys',
    },
    {
        id: 5,
        image: '/images/present-boxes.jpg',
        categoryName: 'Подарункові бокси',
        link: '/presbox',
    },
    {
        id: 6,
        image: '/images/kids_textile.jpg',
        categoryName: 'Дитячий текстиль',
        link: '/textile',
    },
    {
        id: 7,
        image: '/images/body.jpg',
        categoryName: 'Боді',
        link: '/body',
    },
    {
        id: 8,
        image: '/images/towels.jpg',
        categoryName: 'Крижми, рушники',
        link: '/towels',
    },
    {
        id: 9,
        image: '/images/cocoons.jpg',
        categoryName: 'Кокони',
        link: '/cocoons',
    },
]

export default categoriesArray