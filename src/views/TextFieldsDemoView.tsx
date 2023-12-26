import { Box, Stack, TextField } from "@mui/material";
import STextField from "@/components/TextField";

const TextFiledsDemoView = () => {
    return (<Stack spacing={2}>
        <h2>Text Fields</h2>
        <Stack spacing={2}>
            <Stack spacing={1}>
                <Box>Default</Box>
                <TextField label="Label" sx={{ width: '250px' }} />
            </Stack>
            <Stack spacing={1}>
                <Box>Styled</Box>
                <STextField label="Label" sx={{ width: '250px' }} />
            </Stack>
        </Stack>
    </Stack>);
}

export default TextFiledsDemoView;