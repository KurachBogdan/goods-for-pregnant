import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AlternativeLogo from 'components/AlternativeLogo/AlternativeLogo'
import Container from '@mui/material/Container/Container'
import NavMenu from 'components/NavMenu/NavMenu'
import { NavLink } from 'react-router-dom'

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
                height: '49px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <NavLink to="/">
                        <AlternativeLogo />
                    </NavLink>
                    <NavMenu cartData={cartData} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
