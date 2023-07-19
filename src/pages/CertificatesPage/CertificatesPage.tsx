import { Container, Typography } from '@mui/material'
import BackToCategoriesBtn from 'components/BackToCategoriesBtn/BackToCategoriesBtn'
import EveryPageTitle from 'components/EveryPageTitle/EveryPageTitle'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import './CertificatesPage.scss'

type Props = {}

const CertificatesPage = (props: Props) => {
    return (
        <Container className="certificates_page_container"
            maxWidth="lg"
        >
            <ScrollToTopOnMount />
            <EveryPageTitle title="Сертифікати" />
            <div>
                <Typography
                    className="certificates_page_alternative_message"
                    component="div"
                >
                    Ще немає сертифікатів
                </Typography>
                <BackToCategoriesBtn />
            </div>
        </Container>
    )
}

export default CertificatesPage
