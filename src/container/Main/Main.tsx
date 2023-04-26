import React from 'react'
import './Main.scss'
import FirstEffect from 'components/FirstEffect/FirstEffect'
import Home from 'pages/Home/Home'

type Props = {}

const Main = (props: Props) => {
    return (
        <React.Fragment>
            <FirstEffect />
            <Home />
        </React.Fragment>
    )
}

export default Main
