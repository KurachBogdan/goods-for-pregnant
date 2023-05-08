import { Button, TextField } from '@mui/material'
import './Quantity.scss'

type Props = {
    onDecrement: () => void
    onIncrement: () => void
    count: number
    minCount?: number
    maxCount?: number
}

const Quantity = ({
    count,
    onDecrement,
    onIncrement,
    minCount = 1,
    maxCount = 21,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField sx={{ height: '28px' }} value={count} disabled />
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= maxCount}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
