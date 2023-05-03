import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AlternativeLogo from 'components/AlternativeLogo/AlternativeLogo'
import Container from '@mui/material/Container/Container'
import NavMenu from 'components/NavMenu/NavMenu'

type Props = {
    cartData: {
        totalCount: number
    }
}

const Header = ({ cartData }: Props) => {
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
                    'linear-gradient(292deg, rgba(240,240,240,1) 9%, rgba(26,92,94,1) 82%)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar>
                    <AlternativeLogo />
                    <NavMenu
                        cartData={cartData}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
