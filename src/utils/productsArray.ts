export type Product = {
    id: number
    image:string
    category: string
    type: string
    itemName: string
    color: string
    size: string
    composition: string
    term: number
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        image: '/images/grey_rabbit.jpg',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"СІРИЙ ВУХАНЬ"`,
        color: 'сірий',
        size: '30',
        composition: 'поліестер 100%',
        term: 550022,
        price: 989,
    },
    {
        id: 2,
        image: '/images/rabbit_in_glasses.jpg',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"ЗАЙЧИК В ОКУЛЯРАХ"`,
        color: 'персиковий',
        size: '30',
        composition: 'поліестер 100%',
        term: 550026,
        price: 989,
    },
    {
        id: 3,
        image: '/images/brown_bear.jpg',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"ВЕДМЕДИК"`,
        color: 'коричневий',
        size: '28',
        composition: 'поліестер 100%',
        term: 550025,
        price: 794,
    },
    {
        id: 4,
        image: '/images/giraffe.jpg',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"ЖИРАФ"`,
        color: 'жовтий',
        size: '28',
        composition: 'поліестер 100%',
        term: 550023,
        price: 859,
    },
    {
        id: 5,
        image: '/images/white_unicorn.jpg',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"ЄДИНОРІЖКА"`,
        color: 'білий',
        size: '28',
        composition: 'поліестер 100%',
        term: 550024,
        price: 729,
    },
    {
        id: 6,
        image: '/images/knitted_blanket_kudelka.jpg',
        category: 'textile',
        type: `Плед в'язаний`,
        itemName: `"КУДЕЛЬКА"`,
        color: 'блакитний, персиковий',
        size: '100*80',
        composition: 'поліестер 100%',
        term: 440015,
        price: 990,
    },
    {
        id: 7,
        image: '/images/sides_on_the_cradle.jpg',
        category: 'textile',
        type: `Бортики на колиску`,
        itemName: `"SAND" 120*60`,
        color: 'мокрий пісок',
        size: '6 шт.: 55*30',
        composition: 'бавовна, синтепон',
        term: 440020,
        price: 1139,
    },
    {
        id: 8,
        image: '/images/bedclothes_roslinka.jpg',
        category: 'textile',
        type: `Постільна білизна`,
        itemName: `"РОСЛИНКА"`,
        color: 'орнамент',
        size: 'підковдра 120*120; наволочка 40*60; простирадло на резинці 120*60',
        composition: 'бавовна 100%',
        term: 660030,
        price: 659,
    },
    {
        id: 9,
        image: '/images/orthopedic_pillow_roslinka.jpg',
        category: 'textile',
        type: `Подушка ортопедична`,
        itemName: `"РОСЛИНКА"`,
        color: 'принт',
        size: '30*25',
        composition: 'бавовна, холлофайбер',
        term: 330008,
        price: 254,
    },
    {
        id: 10,
        image: '/images/orthopedic_pillow_hmarinka.jpg',
        category: 'textile',
        type: `Подушка ортопедична`,
        itemName: `"ХМАРИНКА"`,
        color: 'білий, фіолетовий',
        size: '30*25',
        composition: 'бавовна, холлофайбер',
        term: 330008,
        price: 254,
    },
    {
        id: 11,
        image: '/images/pillow_for_pregnant_blue.jpg',
        category: 'pregnant',
        type: `Подушка для вагітних`,
        itemName: `"HAPPY MOTHER"`,
        color: 'блакитний',
        size: '150*70',
        composition: 'бавовна, холлофайбер',
        term: 330009,
        price: 939,
    },
    {
        id: 12,
        image: '/images/pillow_for_pregnant_turquoise.jpg',
        category: 'pregnant',
        type: `Подушка для вагітних`,
        itemName: `"HAPPY MOTHER"`,
        color: 'блакитний',
        size: '150*70',
        composition: 'бавовна, холлофайбер',
        term: 330009,
        price: 939,
    },
    {
        id: 13,
        image: '/images/pillow_for_feeding_grey_print.jpg',
        category: 'pregnant',
        type: `Подушка для годування`,
        itemName: `"SOFT CLOUD"`,
        color: 'принт, сірий',
        size: '53*40',
        composition: 'бавовна, холлофайбер',
        term: 330010,
        price: 520,
    },
    {
        id: 14,
        image: '/images/pillow_for_feeding_blue_print.jpg',
        category: 'pregnant',
        type: `Подушка для годування`,
        itemName: `"SOFT CLOUD"`,
        color: 'принт, блакитний',
        size: '53*40',
        composition: 'бавовна, холлофайбер',
        term: 330010,
        price: 520,
    },
    {
        id: 15,
        image: '/images/diaper_1.jpg',
        category: 'diapers',
        type: `Пелюшка`,
        itemName: ``,
        color: 'принт',
        size: '80*80',
        composition: 'бавовна, ситець',
        term: 220006,
        price: 125,
    },
    {
        id: 16,
        image: '/images/diaper_2.jpg',
        category: 'diapers',
        type: `Пелюшка утеплена`,
        itemName: ``,
        color: 'принт',
        size: '80*80',
        composition: '100% бавовна',
        term: 220005,
        price: 125,
    },
    {
        id: 17,
        image: '/images/diaper_3.jpg',
        category: 'diapers',
        type: `Пелюшка`,
        itemName: ``,
        color: 'принт',
        size: '80*80',
        composition: 'бавовна, ситець',
        term: 220006,
        price: 125,
    },
    {
        id: 18,
        image: '/images/diaper_4.jpg',
        category: 'diapers',
        type: `Пелюшка утеплена`,
        itemName: ``,
        color: 'принт',
        size: '80*80',
        composition: '100% бавовна',
        term: 220005,
        price: 125,
    },
    {
        id: 19,
        image: '/images/diaper_5.jpg',
        category: 'diapers',
        type: `Пелюшка утеплена`,
        itemName: ``,
        color: 'принт',
        size: '80*80',
        composition: '100% бавовна',
        term: 220005,
        price: 125,
    },
    {
        id: 20,
        image: '/images/bib_1.jpg',
        category: 'bibs',
        type: `Нагрудник непромокаючий`,
        itemName: `"КОНИКИ"`,
        color: 'принт',
        size: '',
        composition: 'бавовна, водонепроникна мембрана',
        term: 110002,
        price: 250,
    },
    {
        id: 21,
        image: '/images/plaid_cloud.jpg',
        category: 'textile',
        type: `Плед`,
        itemName: `"ХМАРИНКА"`,
        color: 'молоко',
        size: '80*80',
        composition: '100% поліестер',
        term: 440022,
        price: 990,
    },
    {
        id: 22,
        image: '/images/mattress_for_the_changing_table.jpg',
        category: 'textile',
        type: `Матрац для пеленального столика`,
        itemName: ``,
        color: 'блакитний, принт',
        size: '60*70',
        composition: 'бавовна, синтепон',
        term: 440023,
        price: 480,
    },
    {
        id: 23,
        image: '/images/towel_bear.jpg',
        category: 'towels',
        type: `Рушник`,
        itemName: `"ВЕДМЕЖАТКО"`,
        color: 'сірий',
        size: '80*80',
        composition: 'махра (100% бавовна)',
        term: 440017,
        price: 750,
    },
    {
        id: 24,
        image: '/images/cocoon_1.jpg',
        category: 'cocoons',
        type: `Кокон двосторонній`,
        itemName: `"ОБІЙМИ ЗВІРЯТ"`,
        color: 'пісок, принт',
        size: 'універсальний, регулюється',
        composition: 'бавовна, холлофайбер',
        term: 660029,
        price: 880,
    },
    {
        id: 25,
        image: '/images/cocoon_2.jpg',
        category: 'cocoons',
        type: `Кокон двосторонній`,
        itemName: `"PURPLE"`,
        color: 'бузковий',
        size: 'універсальний, регулюється',
        composition: 'бавовна, холлофайбер',
        term: 660028,
        price: 880,
    },
    {
        id: 26,
        image: '/images/cocoon_3.jpg',
        category: 'cocoons',
        type: `Кокон двосторонній`,
        itemName: `"КОНИКИ"`,
        color: `м'ята, принт`,
        size: 'універсальний, регулюється',
        composition: 'бавовна, холлофайбер',
        term: 660030,
        price: 880,
    },
    {
        id: 27,
        image: '/images/body_little_patriot.jpg',
        category: 'body',
        type: `Боді`,
        itemName: `"МАЛЕНЬКИЙ ПАТРІОТ"`,
        color: `білий`,
        size: '62, 68, 74, 80',
        composition: '100% бавовна',
        term: 770001,
        price: 199,
    },
    {
        id: 28,
        image: '/images/body_made_in_ukraine.jpg',
        category: 'body',
        type: `Боді`,
        itemName: `"MADE IN UKRAINE"`,
        color: `білий`,
        size: '62, 68, 74, 80',
        composition: '100% бавовна',
        term: 770002,
        price: 199,
    },
    {
        id: 29,
        image: '/images/body_somik.jpg',
        category: 'body',
        type: `Боді`,
        itemName: `"SOMIK"`,
        color: `білий`,
        size: '62, 68, 74, 80',
        composition: '100% бавовна',
        term: 770003,
        price: 199,
    },
    {
        id: 30,
        image: '/images/body_emblem.jpg',
        category: 'body',
        type: `Боді`,
        itemName: `"ГЕРБ"`,
        color: `білий`,
        size: '62, 68, 74, 80',
        composition: '100% бавовна',
        term: 770004,
        price: 199,
    },
]

export const getProductObject = (array: Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]:product,
}),{})

export default productsArray