import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './BackToCategoriesBtn.scss'

type Props = {}

const BackToCategoriesBtn = (props: Props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Button variant="contained" className="back_to_btn" size="small">
                <Link className="back_to_btn_link" to="/">
                    Повернутись до категорій
                </Link>
            </Button>
        </div>
    )
}

export default BackToCategoriesBtn
