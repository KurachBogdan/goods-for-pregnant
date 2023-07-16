import './BuyerLastNameInput.scss'
import React, { useState } from 'react'

const BuyerLastNameInput: React.FC = () => {
    const [isLastNameComplete, setIsLastNameComplete] = useState(false)
    const [isInvalidInput, setIsInvalidInput] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const regex = /^[а-яА-ЯІіЇїЄєҐґ' -]+$/
        const isComplete = value.length >= 3 && regex.test(value)
        setIsLastNameComplete(isComplete)
        setIsInvalidInput(!regex.test(value))
    }

    return (
        <div
            className={`buyer_last_name_input_container ${
                isLastNameComplete ? 'complete' : ''
            }`}
        >
            <input
                type="text"
                className={`buyer_last_name_input ${
                    isInvalidInput ? 'invalid' : ''
                }`}
                placeholder="Введіть прізвище кирилицею"
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

export default BuyerLastNameInput
