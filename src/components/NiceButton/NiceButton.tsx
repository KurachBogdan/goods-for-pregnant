import Button from '@mui/material/Button'
import './NiceButton.scss'

type Props = {}

const NiceButton = (props: Props) => {
    return (
        <Button
            variant="contained"
            className="Btn"
            size="small"
        >
            <span></span>
        </Button>
    )
}

export default NiceButton
