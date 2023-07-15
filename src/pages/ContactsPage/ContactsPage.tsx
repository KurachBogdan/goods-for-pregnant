import BuyerLastNameInput from 'components/BuyerLastNameInput/BuyerLastNameInput'
import BuyerNameInput from 'components/BuyerNameInput/BuyerNameInput'
import PhoneNumberMask from 'components/PhoneNumberMask/PhoneNumberMask'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {}

const ContactsPage = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <PhoneNumberMask />
            <BuyerLastNameInput />
            <BuyerNameInput />
        </>
    )
}

export default ContactsPage
