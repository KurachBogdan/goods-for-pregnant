import Container from '@mui/material/Container/Container'
import MainPart from 'components/MainPart/MainPart'
import RightSide from 'components/RightSide/RightSide'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Home
