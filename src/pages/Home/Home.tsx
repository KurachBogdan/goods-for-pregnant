import Container from '@mui/material/Container/Container'
import MainPart from 'components/MainPart/MainPart'
import RightSide from 'components/RightSide/RightSide'
import './Home.scss'
import FirstEffect from 'components/FirstEffect/FirstEffect'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Home = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <FirstEffect />
            <div className="home_container">
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '21px',
                    }}
                >
                    <MainPart />
                    <RightSide />
                </Container>
            </div>
        </>
    )
}

export default Home
