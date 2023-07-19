import './EveryPageTitle.scss'

type Props = { title: string }

const EveryPageTitle = ({ title }: Props) => {
    return (
        <>
            <div className="every_page_title">{title}</div>
            <div className="every_page_title_border"></div>
        </>
    )
}

export default EveryPageTitle
