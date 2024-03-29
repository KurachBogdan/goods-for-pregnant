export type Product = {
    id: number
    description: string
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
        description: 'Стильна іграшка є абсолютно безпечною для новонародженого, адже виконана з поліестеру. Іграшка для дітей із такого матеріалу являється найбезпечнішою, так як у ньому не можуть з’явитися мікроорганізми. Зайчик не має гострих елементів і всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/grey_rabbit.webp',
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
        description: 'Стильна іграшка є абсолютно безпечною для новонародженого, адже виконана з поліестеру. Іграшка для дітей із такого матеріалу являється найбезпечнішою, так як у ньому не можуть з’явитися мікроорганізми. Зайчик не має гострих елементів і всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/rabbit_in_glasses.webp',
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
        description: 'Стильна іграшка є абсолютно безпечною для новонародженого, адже виконана з поліестеру. Іграшка для дітей із такого матеріалу являється найбезпечнішою, так як у ньому не можуть з’явитися мікроорганізми. Ведмедик не має гострих елементів і всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/brown_bear.webp',
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
        description: 'Стильна іграшка є абсолютно безпечною для новонародженого, адже виконана з поліестеру. Іграшка для дітей із такого матеріалу являється найбезпечнішою, так як у ньому не можуть з’явитися мікроорганізми. Жираф не має гострих елементів і всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/giraffe.webp',
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
        description: 'Стильна іграшка є абсолютно безпечною для новонародженого, адже виконана з поліестеру. Іграшка для дітей із такого матеріалу являється найбезпечнішою, так як у ньому не можуть з’явитися мікроорганізми. Єдиноріжка не має гострих елементів і всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/white_unicorn.webp',
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
        description: 'Річ, яка зробить життя малюка затишним та максимально комфортним. Плед виконаний із екологічного матеріалу, який стійкий до ураження мікроорганізмами, ідеально зберігає тепло та має хорошу повітропроникність. До того ж пледик дуже ніжний, та ідеально підходить для новонароженого.',
        image: '/images/knitted_blanket_kudelka.webp',
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
        description: 'Головне завдання бортиків- це захист малюка від травматизації. В наборі 6 шт. прямокутних подушечок, які ідеально підходять на колиску 120см*60см. Бортики мають зав’язки, які надійно прикріплюються до ліжечка. Також, бортики можна прати у пральній машині, адже весь виріб виконаний із екологічного складу, тому не боїться температур та обертів. Також ми шиємо за індивідуальними розмірами та додаємо ексклюзивний дизайн (ім’я, дата, напис).',
        image: '/images/sides_on_the_cradle.webp',
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
        description: 'Класична постільна білизна від SOMIK .Постільна білизна виконана із якісної тканини для найніжніших снів вашого малюка. Адже комфортний текстиль- це перша сходинка на шляху до тривалого сну дитини. В комплект входить 3 елементи: •підковдра - 120см*120см, •наволочка - 40см*60см, •простирадло на резинці - 120см*60см. Під замовлення шиємо ваші розміри.',
        image: '/images/bedclothes_roslinka.webp',
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
        description: 'Новонароджені малюки не потребують подушок, але починаючи з 2-3 місяців педіатри радять використовувати спеціально розроблені подушки із валиками, які оточують голову дитини під час сну. Таким чином подушка утримує голову дитини, і захищає від різких рухів голови та шиї дитини.',
        image: '/images/orthopedic_pillow_roslinka.webp',
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
        description: 'Новонароджені малюки не потребують подушок, але починаючи з 2-3 місяців педіатри радять використовувати спеціально розроблені подушки із валиками, які оточують голову дитини під час сну. Таким чином подушка утримує голову дитини, і захищає від різких рухів голови та шиї дитини.',
        image: '/images/orthopedic_pillow_hmarinka.webp',
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
        description: 'Під час вагітності дуже складно вибрати правильну, безпечну позу для сну, але з подушкою від ™️SOMIK “Happy mother” час відпочинку стане для вас максимально комфортним. Валик на верхній частині нашої подушки замінює звичайну подушку, тим самим вирівнюючи положення тіла. До того ж можна закинути ніжку)',
        image: '/images/pillow_for_pregnant_blue.webp',
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
        description: 'Під час вагітності дуже складно вибрати правильну, безпечну позу для сну, але з подушкою від ™️SOMIK “Happy mother” час відпочинку стане для вас максимально комфортним. Валик на верхній частині нашої подушки замінює звичайну подушку, тим самим вирівнюючи положення тіла. До того ж можна закинути ніжку)',
        image: '/images/pillow_for_pregnant_turquoise.webp',
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
        description: 'Аби полегшити процес годування та уникнути болю в спині варто використовувати подушку для годування. У класичному варіанті подушка має форму місяця, яка огортає талію мами і завдяки цьому годування стає максимально зручним та комфортним. Переваги подушки для годування: •натуральний склад, •НЕМАЄ зав’язок, які ускладнюють користування під час годування, •малюк знаходиться у правильній фізіологічний формі, •з‘ємний чохол для прання.',
        image: '/images/pillow_for_feeding_grey_print.webp',
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
        description: 'Аби полегшити процес годування та уникнути болю в спині варто використовувати подушку для годування. У класичному варіанті подушка має форму місяця, яка огортає талію мами і завдяки цьому годування стає максимально зручним та комфортним. Переваги подушки для годування: •натуральний склад, •НЕМАЄ зав’язок, які ускладнюють користування під час годування, •малюк знаходиться у правильній фізіологічний формі, •з‘ємний чохол для прання.',
        image: '/images/pillow_for_feeding_blue_print.webp',
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
        description: 'Пелюшка- невід‘ємний елемент якісного догляду за малюком. На нашому виробництві приділяють особливу увагу тканині, з якої виробляють пелюшки, адже вона має бути довговічною, якісною та максимально комфортною у використанні. Ситець- легка за структурою тканина, яка ідеально пропускає повітря. Цей матеріал виготовляється з натуральної бавовни, тому тканина приємна до тіла, чудово вбирає вологу та не викликає подразнення шкіри.',
        image: '/images/diaper_1.webp',
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
        description: 'Пелюшка- невід‘ємний елемент якісного догляду за малюком. На нашому виробництві приділяють особливу увагу тканині, з якої виробляють пелюшки, адже вона має бути довговічною, якісною та максимально комфортною у використанні. Фланель- це м’яка тепла тканина, яка знайому кожному з дитинсва. Саме фланелеві (утепленні) пелюшки підходять на холодну пору року.',
        image: '/images/diaper_2.webp',
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
        description: 'Пелюшка- невід‘ємний елемент якісного догляду за малюком. На нашому виробництві приділяють особливу увагу тканині, з якої виробляють пелюшки, адже вона має бути довговічною, якісною та максимально комфортною у використанні. Ситець- легка за структурою тканина, яка ідеально пропускає повітря. Цей матеріал виготовляється з натуральної бавовни, тому тканина приємна до тіла, чудово вбирає вологу та не викликає подразнення шкіри.',
        image: '/images/diaper_3.webp',
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
        description: 'Пелюшка- невід‘ємний елемент якісного догляду за малюком. На нашому виробництві приділяють особливу увагу тканині, з якої виробляють пелюшки, адже вона має бути довговічною, якісною та максимально комфортною у використанні. Фланель- це м’яка тепла тканина, яка знайому кожному з дитинсва. Саме фланелеві (утепленні) пелюшки підходять на холодну пору року.',
        image: '/images/diaper_4.webp',
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
        description: 'Пелюшка- невід‘ємний елемент якісного догляду за малюком. На нашому виробництві приділяють особливу увагу тканині, з якої виробляють пелюшки, адже вона має бути довговічною, якісною та максимально комфортною у використанні. Фланель- це м’яка тепла тканина, яка знайому кожному з дитинсва. Саме фланелеві (утепленні) пелюшки підходять на холодну пору року.',
        image: '/images/diaper_5.webp',
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
        description: 'Із чим асоціюють материнство та маленьку дитину вдома? Це нагрудник (слюнявчик). Річ, без якої важко уявити годування та прикорм малюка. Наші нагрудники не лише ексклюзивні, а ще й мають непромокаючу мембрану, яка дозволить дитині самостійно харчуватися рідкою їжею. Нагрудник щільно прилягає до тіла малюка, але не сковує рухи шиї. Також в нагруднику є карман, який захищає від падіння частинок їжі.',
        image: '/images/bib_1.webp',
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
        description: 'Річ, яка зробить життя малюка затишним та максимально комфортним. Плед виконаний із екологічного матеріалу, який стійкий до ураження мікроорганізмами, ідеально зберігає тепло та має хорошу повітропроникність. До того ж пледик дуже ніжний, та ідеально підходить для новонароженого.',
        image: '/images/plaid_cloud.webp',
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
        description: 'Кожна мама хоче забезпечити максимальний комфорт своєму малюку. Особливо коли дитина така крихітна і потребує захисту. Матрац для пеленального столика- незамінна річ у догляді за малюком. Бортики (по 12 см.) захищають від травматизації та різкого перевертання дитини, а також матрац легко переться у пральній машині і можна брати його із собою в подорож.',
        image: '/images/mattress_for_the_changing_table.webp',
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
        description: 'Базова річ у шафі кожного малюка. Махровий рушник виконаний зі 100% натуральної тканини, тому чудово вбирає вологу. Капюшон достатньо широкий, тому одягати його легко, швидко та комфортно. Розмір рушничка дозволяє використовувати його мінімум до 5-ти років малюка. А також махра преміум-якості витримує більше 100 циклів прання.',
        image: '/images/towel_bear.webp',
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
        description: `Основне завдання кокона- це створення комфорту та відчуття безпеки в період адаптації дитини до нових умов існування. Коли ви плануєте подорожувати з малюком, або ж просто поїхати за межі дому- варто спланувати всі деталі поїздки (особливо комфорт дитини). І в цьому вам допоможе кокон від ™️SOMIK. Кокон «ОБІЙМИ ЗВІРЯТ»:   •компактно складається, •висота захисних бортиків 15 см, •можна брати в машину, •регулюється ширина кокона.`,
        image: '/images/cocoon_1.webp',
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
        description: 'Основне завдання кокона- це створення комфорту та відчуття безпеки в період адаптації дитини до нових умов існування. Коли ви плануєте подорожувати з малюком, або ж просто поїхати за межі дому- варто спланувати всі деталі поїздки (особливо комфорт дитини). І в цьому вам допоможе кокон від ™️SOMIK. Кокон «ОБІЙМИ ЗВІРЯТ»:   •компактно складається, •висота захисних бортиків 15 см, •можна брати в машину, •регулюється ширина кокона.',
        image: '/images/cocoon_2.webp',
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
        description: 'Основне завдання кокона- це створення комфорту та відчуття безпеки в період адаптації дитини до нових умов існування. Коли ви плануєте подорожувати з малюком, або ж просто поїхати за межі дому- варто спланувати всі деталі поїздки (особливо комфорт дитини). І в цьому вам допоможе кокон від ™️SOMIK. Кокон «ОБІЙМИ ЗВІРЯТ»:   •компактно складається, •висота захисних бортиків 15 см, •можна брати в машину, •регулюється ширина кокона.',
        image: '/images/cocoon_3.webp',
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
        description: 'Ми бачимо багато патріотичного одягу для дорослих, але не для дітей! Тому створили особливу колекцію для маленьких українців: •високоякісний склад, •сертифікований товар, •вишивка лише зі 100% бавовни, •Ви отримуєте, не просто якісну річ, а трендовий товар, який точно не зустрінете на прогулянці. Ексклюзивність- те, що шукає кожна мама!',
        image: '/images/body_little_patriot.webp',
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
        description: 'Ми бачимо багато патріотичного одягу для дорослих, але не для дітей! Тому створили особливу колекцію для маленьких українців: •високоякісний склад, •сертифікований товар, •вишивка лише зі 100% бавовни, •Ви отримуєте, не просто якісну річ, а трендовий товар, який точно не зустрінете на прогулянці. Ексклюзивність- те, що шукає кожна мама!',
        image: '/images/body_made_in_ukraine.webp',
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
        description: 'Ми бачимо багато патріотичного одягу для дорослих, але не для дітей! Тому створили особливу колекцію для маленьких українців: •високоякісний склад, •сертифікований товар, •вишивка лише зі 100% бавовни, •Ви отримуєте, не просто якісну річ, а трендовий товар, який точно не зустрінете на прогулянці. Ексклюзивність- те, що шукає кожна мама!',
        image: '/images/body_somik.webp',
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
        description: 'Ми бачимо багато патріотичного одягу для дорослих, але не для дітей! Тому створили особливу колекцію для маленьких українців: •високоякісний склад, •сертифікований товар, •вишивка лише зі 100% бавовни, •Ви отримуєте, не просто якісну річ, а трендовий товар, який точно не зустрінете на прогулянці. Ексклюзивність- те, що шукає кожна мама!',
        image: '/images/body_emblem.webp',
        category: 'body',
        type: `Боді`,
        itemName: `"ГЕРБ"`,
        color: `білий`,
        size: '62, 68, 74, 80',
        composition: '100% бавовна',
        term: 770004,
        price: 199,
    },
    {
        id: 31,
        description: 'Шукаєте перше, особливе брязкальце для дитини? Ми створили: •красиву, •з приємним звуком, •натуральну іграшку, •яка буде подобатись малюку. Брязкальця від SOMIK не лише відмінної якості, а й ексклюзивні -таких ви точно не знайдете на просторах інтернету. Кільця, які ми використовуємо, шліфуються до ідеалу, а завдяки м’якій тканині дитина може безпечно бавитися з іграшкою.',
        image: '/images/rattle_duckling.webp',
        category: 'toys',
        type: `Брязкальце`,
        itemName: `"КАЧЕНЯТКО"`,
        color: `білий`,
        size: '14',
        composition: 'мікрополіестер, береза',
        term: 550028,
        price: 220,
    },
    {
        id: 32,
        description: 'Шукаєте перше, особливе брязкальце для дитини? Ми створили: •красиву, •з приємним звуком, •натуральну іграшку, •яка буде подобатись малюку. Брязкальця від SOMIK не лише відмінної якості, а й ексклюзивні -таких ви точно не знайдете на просторах інтернету. Кільця, які ми використовуємо, шліфуються до ідеалу, а завдяки м’якій тканині дитина може безпечно бавитися з іграшкою.',
        image: '/images/rattle_bunny_white.webp',
        category: 'toys',
        type: `Брязкальце`,
        itemName: `"ЗАЙЧИК"`,
        color: `молоко`,
        size: '17',
        composition: 'мікрополіестер, береза',
        term: 550030,
        price: 220,
    },
    {
        id: 33,
        description: 'Шукаєте перше, особливе брязкальце для дитини? Ми створили: •красиву, •з приємним звуком, •натуральну іграшку, •яка буде подобатись малюку. Брязкальця від SOMIK не лише відмінної якості, а й ексклюзивні -таких ви точно не знайдете на просторах інтернету. Кільця, які ми використовуємо, шліфуються до ідеалу, а завдяки м’якій тканині дитина може безпечно бавитися з іграшкою.',
        image: '/images/koala_rattle.webp',
        category: 'toys',
        type: `Брязкальце`,
        itemName: `"КОАЛА"`,
        color: `сірий`,
        size: '14',
        composition: 'мікрополіестер, бук',
        term: 550029,
        price: 220,
    },
    {
        id: 34,
        description: 'Шукаєте перше, особливе брязкальце для дитини? Ми створили: •красиву, •з приємним звуком, •натуральну іграшку, •яка буде подобатись малюку. Брязкальця від SOMIK не лише відмінної якості, а й ексклюзивні -таких ви точно не знайдете на просторах інтернету. Кільця, які ми використовуємо, шліфуються до ідеалу, а завдяки м’якій тканині дитина може безпечно бавитися з іграшкою.',
        image: '/images/rattle_bunny_grey.webp',
        category: 'toys',
        type: `Брязкальце`,
        itemName: `"ЗАЙЧИК"`,
        color: `світло-сірий`,
        size: '17',
        composition: 'мікрополіестер, бук',
        term: 550031,
        price: 220,
    },
    {
        id: 35,
        description: 'Слінгобуси- незамінна та корисна  іграшка для дитини. Вони стануть не лише красивим тримачем для соски, а й відмінним прорізувачем для зубів. Також доведено, що слінгобуси сприяють  розвитку дрібної моторики. Кожна намистинка відшліфована і не має запаху та смаку, а також дуже міцна. Крім того, наші слінгобуси можна з’єднати із текстилем, чи повісити на коляску. ',
        image: '/images/slingbuses_beads.webp',
        category: 'toys',
        type: `Слінгобуси`,
        itemName: `"BEADS"`,
        color: `беж, білий`,
        size: '25 см + резинка 10',
        composition: 'бавовна, дерево',
        term: 550031,
        price: 199,
    },
    {
        id: 36,
        description: 'Малюк вже підріс ? І ходить на ночівлю до бабусі або друзів ? А речі для сну досі не знайшли свого місця? Цю проблему вирішить піжамниця . Іграшка-портфель має в’язану основу в яку можна покласти всі необхідні речі для дитини. Також малюки із задоволенням лягають спати із такою милою іграшкою. У піжамниці є всі шанси стати найулюбленішою іграшкою дитини.',
        image: '/images/pajama_elephant.webp',
        category: 'toys',
        type: `Піжамниця в'язана`,
        itemName: `"СЛОНЕНЯ"`,
        color: `сірий`,
        size: '54',
        composition: 'мікрополіестер',
        term: 550033,
        price: 660,
    },
    {
        id: 37,
        description: 'Іграшка, яка закохує в себе із першого погляду. Максимально мила єдиноріжка, яка підійде кожній маленькій принцесі. Всі елементи міцно з’єднанні між собою, тому іграшка ідеально підійде для малюків, які активно пізнають світ. Доречі, іграшка підходить і новонародженим, адже за рахунок розміру, її можна прикріпити до коляски - і єдиноріжка стане гарною прикрасою для вашого візочка.',
        image: '/images/mini_toy_dreamer.webp',
        category: 'toys',
        type: `Міні-іграшка`,
        itemName: `"МРІЙЛИВКА"`,
        color: `білий, рожевий`,
        size: '12',
        composition: '55% бавовна, 45% поліакрил',
        term: 550032,
        price: 195,
    },
    {
        id: 38,
        description: 'Бестселер нашого магазину. Ведмедик, який найчастіше дарують у пологовому  будинку. Іграшка є абсолютно безпечною для новонародженого. адже виконана із бавовни, а також немає гострих елементів. Всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/toy_happy_bear.webp',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"HAPPY BEAR"`,
        color: `молоко`,
        size: '25',
        composition: '55% бавовна, 45% поліакрил',
        term: 550034,
        price: 469,
    },
    {
        id: 39,
        description: 'Бестселер нашого магазину. Зайчик, який найчастіше дарують у пологовому  будинку. Іграшка є абсолютно безпечною для новонародженого. адже виконана із бавовни, а також немає гострих елементів. Всі елементи надійно скріплені між собою. Запевняємо, що саме ця іграшка підкреслить унікальність Вашого подарунку.',
        image: '/images/toy_cutie.webp',
        category: 'toys',
        type: `Іграшка в'язана`,
        itemName: `"CUTIE"`,
        color: `молоко, рожевий`,
        size: '40',
        composition: '55% бавовна, 45% поліакрил',
        term: 550035,
        price: 469,
    },
]

export const getProductObject = (array: Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]:product,
}),{})

export default productsArray