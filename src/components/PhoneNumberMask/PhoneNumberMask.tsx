import './PhoneNumberMask.scss'
import React from 'react'
import MaskedInput from 'react-text-mask'

const PhoneNumberMask: React.FC = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        console.log(value)
    }

    return (
        <MaskedInput
            mask={["+","3","8","0"," ","(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/]}
            placeholder="+380 (__) ___-__-__"
            placeholderChar={'\u2000'}
            onChange={handleChange}
        />
    )
}

export default PhoneNumberMask
