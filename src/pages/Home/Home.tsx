import Container from '@mui/material/Container/Container'
import MainPart from 'components/MainPart/MainPart'
import RightSide from 'components/RightSide/RightSide'
import './Home.scss'
import FirstEffect from 'components/FirstEffect/FirstEffect'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Fade, Typography, useScrollTrigger } from '@mui/material'

type Props = {
    window?: () => Window
    children?: React.ReactElement
}

function ScrollTop(props: Props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 150,
    })

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor')

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            })
        }
    }

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: '1' }}
            >
                {children}
            </Box>
        </Fade>
    )
}

const Home = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <Typography id="back-to-top-anchor" component="div" />
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
                    <RightSide
                        rightSideLogo="Somik"
                        rightSideTitle="Наші переваги"
                    />
                </Container>
            </div>
            <ScrollTop {...props}>
                <Fab
                    className="fab"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}

export default Home
