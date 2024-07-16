import { axisClasses, BarChart, BarChartProps } from '@mui/x-charts'

type Props = BarChartProps & {
  direction?: 'horizontal' | 'vertical'
  hideLegend?: boolean
}

const BarChartComponent = ({ dataset, series, xAxis, yAxis, direction, borderRadius, hideLegend }: Props) => {
  return (
    <BarChart
      dataset={dataset}
      series={series}
      height={500}
      xAxis={xAxis}
      yAxis={yAxis}
      layout={direction || 'horizontal'}
      sx={{
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translate(40px, 0)'
        }
      }}
      borderRadius={borderRadius}
      slotProps={{
        legend: {
          hidden: hideLegend
        }
      }}
    />
  )
}

export default BarChartComponent
