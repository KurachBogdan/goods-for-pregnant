export type Category = {
    id: number
    image: string
    categoryName: string
    link: string
}

const categoriesArray: Category[] = [
    {
        id: 1,
        image: '/images/diapers.webp',
        categoryName: 'Пелюшки',
        link: '/diapers',
    },
    {
        id: 2,
        image: '/images/bibs.webp',
        categoryName: 'Нагрудники',
        link: '/bibs',
    },
    {
        id: 3,
        image: '/images/for_pregnant.webp',
        categoryName: 'Для вагітних',
        link: '/pregnant',
    },
    {
        id: 4,
        image: '/images/toys-accessories.webp',
        categoryName: 'Іграшки та аксесуари',
        link: '/toys',
    },
    {
        id: 5,
        image: '/images/present-boxes.webp',
        categoryName: 'Подарункові бокси',
        link: '/presbox',
    },
    {
        id: 6,
        image: '/images/kids_textile.webp',
        categoryName: 'Дитячий текстиль',
        link: '/textile',
    },
    {
        id: 7,
        image: '/images/body.webp',
        categoryName: 'Боді',
        link: '/body',
    },
    {
        id: 8,
        image: '/images/towels.webp',
        categoryName: 'Крижми, рушники',
        link: '/towels',
    },
    {
        id: 9,
        image: '/images/cocoons.webp',
        categoryName: 'Кокони',
        link: '/cocoons',
    },
]

export default categoriesArray