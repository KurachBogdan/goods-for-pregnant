export type Article = {
    informativeTitle: string
    informativeImage: string
    informativeArticle: string
}

const articlesArray: Article[] = [
    {
        informativeTitle: 'Якість',
        informativeImage: '/images/quality.webp',
        informativeArticle: 'Ми докладаємо багато зусиль аби  товар був відмінної якості. В складі кожної речі  лише тестований, сертифікований та гіпоалергенний матеріал, адже найголовніше - це здоров’я дитини.',
    },
    {
        informativeTitle: 'Ексклюзивність',
        informativeImage: '/images/exclusivity.webp',
        informativeArticle: 'Наша команда створює лише ексклюзивні речі, аналогів яких не існує на ринку України. Дизайнери слідкують за тенденціями світового рівня та втілюють мрії кожної мами в тм SOMIK.',
    },
    {
        informativeTitle: 'Швидка доставка',
        informativeImage: '/images/fast_delivery.webp',
        informativeArticle: 'Завдяки швидкій логістиці та оперативності менеджерів замовлення відправляються двічі на день у будь-який куточок нашої країни та за кордон.  Також є кур’єрська доставка по Києву та області.',
    },
    {
        informativeTitle: 'Турбота про маму',
        informativeImage: '/images/taking_care_of_mom.webp',
        informativeArticle: 'Ми прекрасно розуміємо брак часу у кожної мами. Тому  створили товар, який примножить турботу та полегшить догляд за малюком, а мама знайде декілька хвилин на себе.',
    },
    {
        informativeTitle: 'Тривалий сон малюка',
        informativeImage: '/images/long-sleep-of-the-baby.webp',
        informativeArticle: 'Тривалий та якісний сон - це основний орієнтир нашої роботи. Малюки засинають швидше та сплять довше, адже відчувають Вашу турботу та нашу роботу. SOMIK- з любов’ю до ваших малюків.',
    },
]

export default articlesArray