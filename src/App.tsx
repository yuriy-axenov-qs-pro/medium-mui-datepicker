import { Container, Stack } from "@mui/material"
import InputsDemoView from "@/views/InputsDemoView";
import TextFiledsDemoView from "./views/TextFieldsDemoView";
import DatePickersDemoView from "./views/DatePickersDemoView";

function App() {
  return (
    <Container maxWidth='md'>
      <Stack spacing={2}>
        <InputsDemoView />
        <TextFiledsDemoView />
        <DatePickersDemoView />
      </Stack>
    </Container>
  )
}

export default App
