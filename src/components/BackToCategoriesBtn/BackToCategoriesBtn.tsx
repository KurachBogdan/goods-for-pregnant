import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './BackToCategoriesBtn.scss'
import React from 'react'
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';

type Props = {}

const BackToCategoriesBtn: React.FC<Props> = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Button
                onMouseDown={() => {
                    setTimeout(() => {
                        window.scrollTo({
                            top: window.innerHeight - 49,
                            behavior: 'smooth',
                        })
                    }, 520)
                }}
                variant="contained"
                className="back_to_btn"
                size="small"
            >
                <NavLink className="back_to_btn_link" to="/">
                    <span className='back_btn_desktop'>Повернутись до категорій</span>
                    <span className='back_btn_mobile'><ReplyAllRoundedIcon /></span>
                </NavLink>
            </Button>
        </div>
    )
}

export default BackToCategoriesBtn
