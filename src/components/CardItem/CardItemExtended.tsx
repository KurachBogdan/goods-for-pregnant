import { Container } from '@mui/material'
import './CardItemExtended.scss'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {}

const CardItemExtended = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <Container
                maxWidth="lg"
                sx={{
                    padding: '21px 24px',
                    width: 'calc(100vw - 17px)',
                    height: 'calc(100vh - 49px)',
                }}
            >
                <div className="card_item_extended_container">
                    <div className="card_item_extended_image_container"></div>
                    <div className="card_item_extended_description_container"></div>
                </div>
            </Container>
        </>
    )
}

export default CardItemExtended
