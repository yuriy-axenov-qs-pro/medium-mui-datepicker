import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Input from './Input';
import { InputLabel, InputProps } from '@mui/material';
import { forwardRef, useId } from 'react';

//   label?: React.ReactNode;
//   error?: boolean;
//   focused?: boolean;
//   ownerState?: any;
//   InputProps?: InputProps;
//   helperText?: React.ReactNode;
//   fullWidth?: boolean;
// }

// type CustomFieldComponent = ((
//   props: CustomFieldProps & React.RefAttributes<HTMLDivElement>
// ) => JSX.Element) & { propTypes?: any };

// const CustomField = React.forwardRef(
//   (props: CustomFieldProps, inputRef: React.Ref<HTMLInputElement>) => {
//     const {
//       disabled,
//       id,
//       label,
//       InputProps: { ref: containerRef, startAdornment, endAdornment } = {},
//       error,
//       focused,
//       ownerState,
//       helperText,
//       sx,
//       fullWidth,
//       ...other
//     } = props;

//     const inputLabelId = label && id ? `${id}-label` : undefined;

//     return (
//       <TextFieldRoot
//         variant="standard"
//         error={error}
//         id={id}
//         labelWordBreak={false}
//         sx={sx}
//         fullWidth={fullWidth}
//       >
//         {label && (
//           <InputLabel id={inputLabelId} shrink htmlFor={id} disabled={disabled}>
//             {label}
//           </InputLabel>
//         )}
//         <Input
//           disabled={disabled}
//           ref={containerRef}
//           inputRef={inputRef}
//           disableUnderline={true}
//           startAdornment={startAdornment}
//           endAdornment={endAdornment}
//           fullWidth={fullWidth}
//           error={error}
//           {...other}
//         />
//         {helperText && <FormHelperText>{helperText}</FormHelperText>}
//       </TextFieldRoot>
//     );
//   }
// ) as CustomFieldComponent;
interface TextFieldProps extends InputProps {
  label?: React.ReactNode;
  containerRef?: React.Ref<HTMLDivElement>;
}

const TextField: React.FC<TextFieldProps> = forwardRef((props, inputRef) => {
  const id = useId();
  const { containerRef, ...rest } = props;
  return (<TextFieldRoot
    variant="standard"
  >
    {props.label && (
      <InputLabel id={`label-${id}`} shrink htmlFor={id}>
        {props.label}
      </InputLabel>
    )}
    <Input
      {...rest}
      disableUnderline
      id={id}
      inputRef={inputRef}
      ref={containerRef}
    />
  </TextFieldRoot>);
});

const TextFieldRoot = styled(FormControl)`
    & .MuiInputBase-root {
      background-color: var(--input-bg-color);
      border: 1px solid var(--input-border-color);
      border-radius: 2px;
      box-sizing: border-box;
  
      ${(props) =>
    props.error &&
    `
        --input-border-color: var(--error-color);
        --input-border-color-hover: var(--error-color);
        --primary-color: var(--error-color);
      `}
  
      &:hover:not(.Mui-disabled) {
        border-color: var(--input-border-color-hover);
      }
  
      &:focus-within:not(.Mui-disabled) {
        background-color: unset;
        border-color: var(--primary-color);
      }
    }
  
    & .MuiInputBase-root.MuiInputBase-adornedStart {
      .MuiInputBase-input {
        padding-left: 0;
      }
    }
  
    & .MuiInputBase-root.MuiInputBase-adornedEnd {
      .MuiInputBase-input {
        padding-right: 0;
      }
    }
  
    & .MuiInputAdornment-positionStart {
      padding-left: 12px;
    }
  
    & .MuiInputAdornment-positionEnd {
      padding-right: 12px;
    }
  
    & .MuiInput-root .MuiSelect-icon {
      right: 4px;
    }
  `;

export default TextField;