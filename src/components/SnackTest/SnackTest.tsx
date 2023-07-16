import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomizedSnackbars() {
    const [openSnack, setOpenSnack] = useState(false)

    const handleOpenSnack = () => {
        setOpenSnack(true)
    }

    const handleCloseSnack = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenSnack(false)
    }

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant="outlined" onClick={handleOpenSnack}>
                Open success snackbar
            </Button>
            <Snackbar
                open={openSnack}
                autoHideDuration={800}
                onClose={handleCloseSnack}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Дякуємо за Ваш відгук!
                </Alert>
            </Snackbar>
        </Stack>
    )
}
