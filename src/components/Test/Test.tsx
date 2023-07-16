import './Test.scss'
import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

const ContactDataBlock: React.FC = () => {
    const [isPhoneNumberComplete, setIsPhoneNumberComplete] = useState(false)
    const [isLastNameComplete, setIsLastNameComplete] = useState(false)
    const [isNameComplete, setIsNameComplete] = useState(false)
    const [isInvalidLastNameInput, setIsInvalidLastNameInput] = useState(false)
    const [isInvalidNameInput, setIsInvalidNameInput] = useState(false)
    const [showUserData, setShowUserData] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')

    const handlePhoneNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target
        const regex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/
        const isComplete = regex.test(value)
        setIsPhoneNumberComplete(isComplete)
        setPhoneNumber(value)
    }

    const handleLastNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target
        const regex = /^[а-яА-ЯІіЇїЄєҐґ'-]+$/
        const isComplete = value.length >= 3 && regex.test(value)
        setIsLastNameComplete(isComplete)
        setIsInvalidLastNameInput(!regex.test(value))
        setLastName(value)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const regex = /^[а-яА-ЯІіЇїЄєҐґ'-]+$/
        const isComplete = value.length >= 3 && regex.test(value)
        setIsNameComplete(isComplete)
        setIsInvalidNameInput(!regex.test(value))
        setFirstName(value)
    }

    const renderIcon = () => {
        if (isPhoneNumberComplete && isLastNameComplete && isNameComplete) {
            return <span className="checkmark">&#10004;</span>
        } else {
            return <span className="incomplete_first">1</span>
        }
    }

    const isFormComplete =
        isPhoneNumberComplete && isLastNameComplete && isNameComplete

    const handleContinue = () => {
        setShowUserData(true)
    }

    const handleEdit = () => {
        setShowUserData(false)
        setIsPhoneNumberComplete(false)
        setIsLastNameComplete(false)
        setIsNameComplete(false)
        setPhoneNumber('')
        setLastName('')
        setFirstName('')
    }

    return (
        <div style={{ padding: '7px' }}>
            <div className="contact_data_block_title_wrapper">
                <div className="contact_data_block_title_container">
                    <div
                        className="contact_data_block_icon"
                        style={{ margin: '10px', cursor: 'context-menu' }}
                    >
                        {renderIcon()}
                    </div>
                    <div className="contact_data_block_title">
                        Контактні дані
                    </div>
                </div>
                {showUserData ? (
                    <button className="change_input_data" onClick={handleEdit}>
                        Змінити
                    </button>
                ) : null}
            </div>
            <div className="contact_data_block">
                {showUserData ? (
                    <div>
                        <div className="user_data">
                            <span>
                                {lastName} {firstName}
                            </span>
                        </div>
                        <div className="user_data">{phoneNumber}</div>
                    </div>
                ) : (
                    <div>
                        <div className="contact_data_block_container">
                            <div className="phone_title_container">
                                <div className="phone_title">Телефон</div>
                                <div
                                    className={`phone_number_mask_input_container ${
                                        isPhoneNumberComplete ? 'complete' : ''
                                    }`}
                                >
                                    <MaskedInput
                                        type="tel"
                                        className="phone_number_mask_input"
                                        mask={["+","3","8","0"," ","(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/]}
                                        placeholder="+380 ( __ ) ___-__-__"
                                        placeholderChar={'\u2000'}
                                        onChange={handlePhoneNumberChange}
                                    />
                                </div>
                            </div>
                            <div className="last_name_container">
                                <div className="last_name_title">Прізвище</div>
                                <div
                                    className={`buyer_last_name_input_container ${
                                        isLastNameComplete ? 'complete' : ''
                                    }`}
                                >
                                    <input
                                        type="text"
                                        className={`buyer_last_name_input ${
                                            isInvalidLastNameInput
                                                ? 'invalid'
                                                : ''
                                        }`}
                                        placeholder="Введіть прізвище кирилицею"
                                        onChange={handleLastNameChange}
                                    />
                                    {isInvalidLastNameInput && (
                                        <p className="error_message">
                                            Використовуйте тільки кириличні
                                            символи
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="first_name_container">
                                <div className="first_name_title">Ім'я</div>
                                <div
                                    className={`buyer_name_input_container ${
                                        isNameComplete ? 'complete' : ''
                                    }`}
                                >
                                    <input
                                        type="text"
                                        className={`buyer_name_input ${
                                            isInvalidNameInput ? 'invalid' : ''
                                        }`}
                                        placeholder="Введіть Ім'я кирилицею"
                                        onChange={handleNameChange}
                                    />
                                    {isInvalidNameInput && (
                                        <p className="error_message">
                                            Використовуйте тільки кириличні
                                            символи
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div style={{ paddingTop: '7px' }}>
                                <button
                                    className={`contact_data_block_button ${
                                        isFormComplete ? 'active' : ''
                                    }`}
                                    disabled={!isFormComplete}
                                    onClick={handleContinue}
                                >
                                    Продовжити
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactDataBlock
