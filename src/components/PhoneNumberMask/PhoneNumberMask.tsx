import './PhoneNumberMask.scss'
import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

const PhoneNumberMask: React.FC = () => {
    const [isPhoneNumberComplete, setIsPhoneNumberComplete] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const regex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/
        const isComplete = regex.test(value)
        setIsPhoneNumberComplete(isComplete)
    }

    return (
        <div
            className={`phone_number_mask_input_container ${
                isPhoneNumberComplete ? 'complete' : ''
            }`}
        >
            <MaskedInput
                type='tel'
                className="phone_number_mask_input"
                mask={["+","3","8","0"," ","(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/]}
                placeholder="+380 ( __ ) ___-__-__"
                placeholderChar={'\u2000'}
                onChange={handleChange}
            />
        </div>
    )
}

export default PhoneNumberMask
