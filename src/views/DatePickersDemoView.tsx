import { Box, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SDatePicker from '@/components/DatePicker';

const DatePickersDemoView = () => {
    return (<Stack spacing={2}>
        <h2>Date Pickers</h2>
        <Stack spacing={2}>

            <Stack spacing={1}>
                <Box>Default</Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{ width: '250px' }}>
                        <DatePicker label="Label" />
                    </Box>
                </LocalizationProvider>
            </Stack>

            <Stack spacing={1}>
                <Box>Styled</Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{ width: '250px' }}>
                        <SDatePicker label="Label" />
                    </Box>
                </LocalizationProvider>
            </Stack>
        </Stack>
    </Stack>);
}

export default DatePickersDemoView;