import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import productsArray from 'utils/productsArray'

type Props = {}

const SelectForm = (props: Props) => {
    const [product, setProduct] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setProduct(event.target.value as string)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Оберіть товар</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={product}
                    label="Age"
                    onChange={handleChange}
                >
                    {productsArray.map(({id, type, itemName}) => (
                        <MenuItem key={id} value={`${type} ${itemName}`}>{`${type} ${itemName}`}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectForm
