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
            <button
                className="on-decrement_btn"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </button>
            <p className="text-field">{count}</p>
            <button
                className="on-increment_btn"
                onClick={() => onIncrement()}
                disabled={count >= maxCount}
            >
                +
            </button>
        </div>
    )
}

export default Quantity
