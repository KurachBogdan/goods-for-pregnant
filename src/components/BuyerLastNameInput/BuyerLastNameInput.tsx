import './BuyerLastNameInput.scss'
import React, { useState } from 'react'

const BuyerLastNameInput: React.FC = () => {
    const [isLastNameComplete, setIsLastNameComplete] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const isComplete = value.length >=3
        setIsLastNameComplete(isComplete)
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
