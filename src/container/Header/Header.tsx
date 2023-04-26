import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AlternativeLogo from 'components/AlternativeLogo/AlternativeLogo'
import React from 'react'
import Container from '@mui/material/Container/Container'
import NavMenu from 'components/NavMenu/NavMenu'

type Props = {}

const Header = (props: Props) => {
    return (
        <React.Fragment>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: '#faf6f1',
                    borderTop: '1px solid #045540',
                    borderBottom: '1px solid #045540',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <AlternativeLogo />
                        <NavMenu />
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
