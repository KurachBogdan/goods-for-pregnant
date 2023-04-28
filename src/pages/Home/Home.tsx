import Container from '@mui/material/Container/Container'
import MainPart from 'components/MainPart/MainPart'
import RightSide from 'components/RightSide/RightSide'
import './Home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
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
    )
}

export default Home
