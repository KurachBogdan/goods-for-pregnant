import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import React from 'react'

type Props = {}

const App = (props: Props) => {
    return (
        <React.Fragment>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </React.Fragment>
    )
}

export default App
