import { pieArcLabelClasses, PieChart, PieChartProps, PieValueType } from '@mui/x-charts'
import { useEffect, useRef, useState } from 'react'
import { Stack } from '@mui/material'
import PieLabels from '../ChartLabels'

type PieChartComponentProps = Omit<PieChartProps, 'series'> & {
  data: PieValueType[]
}

const PieChartComponent = ({ height = 200, data }: PieChartComponentProps) => {
  const [cx, setCx] = useState(225) // Default value
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCx = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current?.offsetWidth
        setCx(containerWidth / 2)
      }
    }

    updateCx()
    window.addEventListener('resize', updateCx)

    return () => {
      window.removeEventListener('resize', updateCx)
    }
  }, [])

  const totalValues = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <Stack ref={containerRef} gap={1}>
      <PieLabels data={data} />
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 50,
            outerRadius: 100,
            paddingAngle: 0,
            cornerRadius: 0,
            startAngle: 0,
            endAngle: 360,
            arcLabelMinAngle: 45,
            cx: cx,
            arcLabel: (item) => `${((item.value / totalValues) * 100).toFixed(2)} %`
          }
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
            fontSize: 12
          },
          [`& .MuiResponsiveChart.container`]: {
            '& svg': {
              width: '100%'
            }
          }
        }}
        height={height}
        slotProps={{
          legend: {
            hidden: true
          }
        }}
      />
    </Stack>
  )
}

export default PieChartComponent
