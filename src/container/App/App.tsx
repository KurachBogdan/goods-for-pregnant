import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import FirstEffect from 'components/FirstEffect/FirstEffect'
import Home from 'pages/Home/Home'

type Props = {}

const App = (props: Props) => {

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <FirstEffect />
            <CategoryPage />
            <Home />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
