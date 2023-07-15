import ContactDataBlock from 'components/ContactDataBlock/ContactDataBlock'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {}

const ContactsPage = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <ContactDataBlock />
        </>
    )
}

export default ContactsPage
