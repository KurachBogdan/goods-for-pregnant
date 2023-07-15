import './ContactDataBlock.scss'
import BuyerLastNameInput from 'components/BuyerLastNameInput/BuyerLastNameInput'
import BuyerNameInput from 'components/BuyerNameInput/BuyerNameInput'
import PhoneNumberMask from 'components/PhoneNumberMask/PhoneNumberMask'

const ContactDataBlock: React.FC = () => {
    return (
        <>
            <div className="contact_data_block_container">
                <div className="phone_title_container">
                    <div className="phone_title">Телефон</div>
                    <PhoneNumberMask />
                </div>
                <div className="last_name_container">
                    <div className="last_name_title">Прізвище</div>
                    <BuyerLastNameInput />
                </div>
                <div className="first_name_container">
                    <div className="first_name_title">Ім'я</div>
                    <BuyerNameInput />
                </div>
            </div>
        </>
    )
}

export default ContactDataBlock
