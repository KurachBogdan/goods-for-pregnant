import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './BackToCategoriesBtn.scss'
import React from 'react'

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
                    }, 490)
                }}
                variant="contained"
                className="back_to_btn"
                size="small"
            >
                <NavLink className="back_to_btn_link" to="/">
                    Повернутись до категорій
                </NavLink>
            </Button>
        </div>
    )
}

export default BackToCategoriesBtn
