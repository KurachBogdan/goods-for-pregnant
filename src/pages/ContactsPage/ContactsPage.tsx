// import ContactDataBlock from 'components/ContactDataBlock/ContactDataBlock'
import SnackTest from 'components/SnackTest/SnackTest'
import Test from 'components/Test/Test'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {}

const ContactsPage = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            {/* <ContactDataBlock /> */}
            <Test />
            <SnackTest />
        </>
    )
}

export default ContactsPage
