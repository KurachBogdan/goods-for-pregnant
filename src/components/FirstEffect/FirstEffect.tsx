import { Button } from '@mui/material'
import './FirstEffect.scss'

type Props = {}

const FirstEffect = (props: Props) => {
    return (
        <div
            aria-label="Кнопка зі стрілкою вниз"
            className="background-container"
        >
            <div className="logo_container"></div>
            <Button variant="text" className="btn-down-arrow">
                <div className="arrow-down-1"></div>
                <div className="arrow-down-2"></div>
            </Button>
        </div>
    )
}

export default FirstEffect
