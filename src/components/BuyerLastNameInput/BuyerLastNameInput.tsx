import './BuyerLastNameInput.scss'
import React, { useState } from 'react'

const BuyerLastNameInput: React.FC = () => {
    const [isLastNameComplete, setIsLastNameComplete] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        // const regex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/
        // const isComplete = regex.test(value)
        // setIsLastNameComplete(isComplete)
    }

    return (
        <div className={`buyer_last_name_input_container ${
            isLastNameComplete ? 'complete' : ''
        }`}>
            <input
                type="text"
                className="buyer_last_name_input"
                placeholder="Введіть прізвище кирилицею"
                onChange={handleChange}
            />
        </div>
    )
}

export default BuyerLastNameInput
