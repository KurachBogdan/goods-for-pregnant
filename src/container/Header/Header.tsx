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
                    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,98,121,0.76234243697479) 47%, rgba(0,212,255,1) 100%)',
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
