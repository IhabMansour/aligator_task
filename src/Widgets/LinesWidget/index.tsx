import { useCallback } from 'react'
import { Card, Container, Stack, Typography } from '@mui/material'
import DateHeaderLabel from '../../Components/DateHeaderLabel'
import PieLabels from '../../Components/ChartLabels'
import { PieValueType } from '@mui/x-charts'
import { DATA_COLORS } from '../../Utilities/constants'
import { AccumulatedData, BodyData } from '../../Interfaces'
import { RANKING } from '../../MockData/Ranking'
import LineChild from './LineChild'

const LinesWidget = () => {
  const getData = useCallback((barData: BodyData[]) => {
    return barData?.reduce<AccumulatedData>((acc, item) => {
      const { source, keyword, numMentions } = item

      if (keyword) {
        if (!acc[keyword]) {
          acc[keyword] = { keyword }
        }

        if (source) {
          acc[keyword][source] = numMentions || 0
        }
      }

      return acc
    }, {})
  }, [])

  const getLabelsData = () => {
    return Object.keys(DATA_COLORS).map((key) => {
      return {
        label: key,
        color: DATA_COLORS?.[key]
      } as PieValueType
    })
  }

  return (
    <Container sx={{ padding: 5, bgcolor: 'floralwhite' }}>
      <Card
        sx={{
          padding: 2
        }}
      >
        <Typography fontWeight='bold' fontSize={14}>
          Euro 24 sponsors - Posts over time
        </Typography>
        <DateHeaderLabel label='Posts' startDate={RANKING.startDate} endDate={RANKING.endDate} />

        <PieLabels data={getLabelsData()} />

        <Stack p={2}>
          <hr style={{ borderTop: '1px solid lightGray', width: '100%' }} />
          {Object.values(getData(RANKING.data))?.map((item, index) => {
            return (
              <>
                <Stack direction='row' alignItems='center' gap={20} justifyContent='space-between'>
                  <Stack direction='row' gap={2} pl={1}>
                    <Typography color='lightgray'>{index + 1}</Typography>
                    <Typography>{item.keyword}</Typography>
                  </Stack>
                  <Stack direction='row' width='100%' maxWidth='75%'>
                    {Object.keys(item)?.map(
                      (key, keyIndex) => key !== 'keyword' && <LineChild keyIndex={keyIndex} item={item} objectKey={key} />
                    )}
                  </Stack>
                </Stack>
                <hr style={{ borderTop: '1px solid lightGray', width: '100%' }} />
              </>
            )
          })}
        </Stack>
      </Card>
    </Container>
  )
}

export default LinesWidget
