import articlesArray from 'utils/articlesArray'
import './RightSide.scss'
import { CardMedia } from '@mui/material'

type Props = {
    rightSideLogo: string
    rightSideTitle: string
}

const RightSide = ({ rightSideLogo, rightSideTitle }: Props) => {
    return (
        <div className="right_side-container">
            <div className="title_container">
                <p className="right_side-logo">{rightSideLogo}</p>
                <p className="right_side-title">{rightSideTitle}</p>
            </div>
            {articlesArray.map(
                ({
                    informativeTitle,
                    informativeImage,
                    informativeArticle,
                }) => (
                    <div className="article_container">
                        <CardMedia  sx={{ width: '77px', height: '154px' }} image={informativeImage}/>
                        <div className="article_part">
                            <p className="article_title">{informativeTitle}</p>
                            <p className="right_side-article">{informativeArticle}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default RightSide
// sx={{ height: 232 }} image={image}
