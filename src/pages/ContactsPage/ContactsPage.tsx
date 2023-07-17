import Test from 'components/Test/Test'
import ScrollToTopOnMount from 'utils/ScrollToTopOnMount'

type Props = {}

const ContactsPage = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <Test />
        </>
    )
}

export default ContactsPage
