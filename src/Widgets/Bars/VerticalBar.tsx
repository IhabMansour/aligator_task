import { useCallback, useEffect, useState } from 'react'
import BarChartComponent from '../../Components/BarChart'
import { Card, Container, Stack, Typography } from '@mui/material'
import DateHeaderLabel from '../../Components/DateHeaderLabel'
import { POSTS_OVER_TIME } from '../../MockData/PostsOverTime'
import { BarSeriesType } from '@mui/x-charts'
import { formatDate, getXAxis } from '../../Utilities'

const VerticalBarWidget = () => {
  const [lineDataState, setLineDataState] = useState<BarSeriesType[]>([])

  const getData = useCallback((lineData: any[]) => {
    return lineData.reduce((acc, item) => {
      if (!acc[item.source]) {
        acc[item.source] = []
      }
      acc[item.source].push(item.numMentions)
      return acc
    }, {})
  }, [])

  useEffect(() => {
    const lineData = getData(POSTS_OVER_TIME.data)
    const formatData = []

    for (const [key, value] of Object.entries(lineData)) {
      formatData.push({
        data: value,
        label: key,
        stack: 'total'
      } as BarSeriesType)
    }

    setLineDataState(formatData)
  }, [])

  return (
    <Container sx={{ padding: 5, bgcolor: 'lightcyan' }}>
      <Card
        sx={{
          padding: 2
        }}
      >
        <Stack gap={1}>
          <Typography fontWeight='bold' fontSize={14}>
            Euro 24 sponsors - Posts over time
          </Typography>
          <DateHeaderLabel label='Posts' startDate={POSTS_OVER_TIME.startDate} endDate={POSTS_OVER_TIME.endDate} />
          <BarChartComponent
            series={lineDataState}
            xAxis={[
              {
                data: getXAxis(POSTS_OVER_TIME.data),
                scaleType: 'band',
                categoryGapRatio: 0.6,
                tickPlacement: 'middle',
                tickLabelPlacement: 'middle',
                valueFormatter: (value: number) => formatDate(value)
              } as any
            ]}
            direction='vertical'
          />
        </Stack>
      </Card>
    </Container>
  )
}

export default VerticalBarWidget
