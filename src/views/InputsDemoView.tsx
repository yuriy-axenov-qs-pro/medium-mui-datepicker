import { Box, Input, Stack } from "@mui/material"
import SInput from "@/components/Input";

const InputsDemoView = () => {
    return (<Stack spacing={2}>
        <h2>Inputs</h2>
        <Stack spacing={2}>

            <Stack spacing={1}>
                <Box>Default</Box>
                <Input sx={{ width: '250px' }} />
            </Stack>

            <Stack spacing={1}>
                <Box>Styled</Box>
                <SInput sx={{ width: '250px' }} />
            </Stack>
        </Stack>
    </Stack>);
}

export default InputsDemoView;