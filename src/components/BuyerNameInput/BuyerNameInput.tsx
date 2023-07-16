import './BuyerNameInput.scss'
import React, { useState } from 'react'

const BuyerNameInput: React.FC = () => {
    const [isNameComplete, setIsNameComplete] = useState(false)
    const [isInvalidInput, setIsInvalidInput] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const regex = /^[а-яА-ЯІіЇїЄєҐґ' -]+$/
        const isComplete = value.length >= 3 && regex.test(value)
        setIsNameComplete(isComplete)
        setIsInvalidInput(!regex.test(value))
    }

    return (
        <div
            className={`buyer_name_input_container ${
                isNameComplete ? 'complete' : ''
            }`}
        >
            <input
                type="text"
                className={`buyer_name_input ${
                    isInvalidInput ? 'invalid' : ''
                }`}
                placeholder="Введіть Ім'я кирилицею"
                onChange={handleChange}
            />
            {isInvalidInput && (
                <p className="error_message">
                    Використовуйте тільки кириличні символи
                </p>
            )}
        </div>
    )
}

export default BuyerNameInput
