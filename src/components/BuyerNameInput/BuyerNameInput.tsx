import './BuyerNameInput.scss'
import React, { useState } from 'react'

const BuyerNameInput: React.FC = () => {
    const [isNameComplete, setIsNameComplete] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        // const regex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/
        // const isComplete = regex.test(value)
        // setIsNameComplete(isComplete)
    }

    return (
        <div className={`buyer_name_input_container ${
            isNameComplete ? 'complete' : ''
        }`}>
            <input
                type="text"
                className="buyer_name_input"
                placeholder="Введіть Ім'я кирилицею"
                onChange={handleChange}
            />
        </div>
    )
}

export default BuyerNameInput
