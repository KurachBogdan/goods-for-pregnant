import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AlternativeLogo from 'components/AlternativeLogo/AlternativeLogo'
import Container from '@mui/material/Container/Container'
import NavMenu from 'components/NavMenu/NavMenu'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar
            position="sticky"
            sx={{
                borderTop: '1px solid #045540',
                borderBottom: '1px solid #045540',
                height: '49px',
                display: 'flex',
                justifyContent: 'center',
                backgroundImage:
                    'linear-gradient(to right, #9402D9, #868CE7, #5FFBF1)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar>
                    <AlternativeLogo />
                    <NavMenu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
