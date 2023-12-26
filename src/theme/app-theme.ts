import { createTheme } from '@mui/material/styles';
import variables from './variables.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: variables.primary_color,
        },
        secondary: {
            main: variables.secondary_color,
        },
        info: {
            main: variables.info_color,
        },
        warning: {
            main: variables.accent_color,
        },
        background: {
            default: variables.background_color,
        },
        error: {
            main: variables.error_color,
        },
        text: {
            primary: variables.text_color,
            secondary: variables.secondary_text_color,
        },
    },
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
});

export default theme;