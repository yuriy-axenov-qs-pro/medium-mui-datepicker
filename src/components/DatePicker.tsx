import { DatePickerProps, DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import STextField from '@/components/TextField';
import { BaseSingleInputFieldProps, DateValidationError, FieldSection, UseDateFieldProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useDateField } from '@mui/x-date-pickers/DateField/useDateField';

const DatePicker: React.FC<DatePickerProps<Dayjs>> = (props) => {
    return (
        <MuiDatePicker
            {...props}
            slots={{
                field: DateFieldWrapper,
                ...props.slots,
            }}
        />);
}

interface DateFieldWrapperProps
    extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<Dayjs | null, Dayjs, FieldSection, DateValidationError> { }

const DateFieldWrapper: React.FC<DateFieldWrapperProps> = (props) => {
    const { inputRef: externalInputRef, slots, slotProps, ...textFieldProps } = props;

    const response = useDateField<Dayjs, typeof textFieldProps>({
        props: textFieldProps,
        inputRef: externalInputRef,
    });
    const {
        // get rid of non available props for our Input
        onClear,
        clearable,
        focused,

        InputProps,
        ref,
        ...others } = response;

    return <STextField
        containerRef={InputProps?.ref}
        startAdornment={InputProps?.startAdornment}
        endAdornment={InputProps?.endAdornment} {...others}
        ref={ref}
    />;
}

export default DatePicker