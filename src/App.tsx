import { Stack } from '@mui/material'
import BarsWidget from './Widgets/Bars'
import LineWidget from './Widgets/Line'
import LinesWidget from './Widgets/LinesWidget'
import PieWidget from './Widgets/Pie'

function App() {
  return (
    <Stack gap={5}>
      <PieWidget />

      <BarsWidget />

      <LinesWidget />

      <LineWidget />
    </Stack>
  )
}

export default App
