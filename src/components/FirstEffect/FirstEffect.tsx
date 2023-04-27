import { Button } from '@mui/material'
import './FirstEffect.scss'

type Props = {}

const FirstEffect = (props: Props) => {
    const handleClick = () => {
        window.scrollTo({ top: window.innerHeight - 49, behavior: 'smooth' })
    }
    return (
        <div className="background-container">
            <div className="logo_container"></div>
            <Button
                onClick={handleClick}
                aria-label="Кнопка зі стрілкою вниз"
                variant="text"
                className="btn-down-arrow"
            >
                <div className="arrow-down-1"></div>
                <div className="arrow-down-2"></div>
            </Button>
        </div>
    )
}

export default FirstEffect
