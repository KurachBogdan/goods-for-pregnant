import articlesArray from 'utils/articlesArray'
import './RightSide.scss'

type Props = {
    rightSideLogo: string
    rightSideTitle: string
}

const RightSide = ({ rightSideLogo, rightSideTitle }: Props) => {
    return (
        <div className="right_side-container">
            <div className="right_side-title">
                <p className="right_side-logo">{rightSideLogo}</p>
                <p className="right_side-title">{rightSideTitle}</p>
            </div>

        </div>
    )
}

export default RightSide
