import { LineChart, LineSeriesType } from '@mui/x-charts'
import { formatDate } from '../../Utilities'

type Props = {
  data: LineSeriesType[]
  xAxisData: any[]
  min: number
  max: number
}

const LineGraph = ({ data, xAxisData, min, max }: Props) => {
  return (
    <LineChart
      xAxis={[{ data: xAxisData, valueFormatter: (value) => formatDate(value), min, max }]}
      series={data}
      height={500}
      grid={{ vertical: true, horizontal: true }}
    />
  )
}

export default LineGraph
