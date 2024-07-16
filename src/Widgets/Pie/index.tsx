import { Card, Container, Grid, Stack, Typography } from '@mui/material'
import PieChartComponent from '../../Components/PieChart'
import { useCallback } from 'react'
import { PieValueType } from '@mui/x-charts'
import DateHeaderLabel from '../../Components/DateHeaderLabel'
import { SHARE_OF_VOICES } from '../../MockData/ShareOfVoice'
import { ESTIMATED_REACH } from '../../MockData/EstimatedReach'
import { ENGAGEMENT } from '../../MockData/Engagement'

const PieWidget = () => {
  const getData = useCallback((pieData: any) => {
    return pieData?.data?.map((item: any, index: number) => {
      return {
        id: index,
        value: item.numMentions || item.estimatedReach || item.engagementCount,
        label: item.source,
        color: item.sourceColor
      }
    }) as PieValueType[]
  }, [])

  return (
    <Container sx={{ padding: 5, bgcolor: 'floralwhite' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card>
            <Stack gap={1} padding={1}>
              <Typography fontWeight='bold' fontSize={14}>
                PlatForms - Share Of Voices
              </Typography>
              <DateHeaderLabel label='Posts' startDate={SHARE_OF_VOICES.startDate} endDate={SHARE_OF_VOICES.endDate} />
              <PieChartComponent data={getData(SHARE_OF_VOICES)} />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card>
            <Stack gap={1} padding={1}>
              <Typography fontWeight='bold' fontSize={14}>
                PlatForms - EstimatedReach
              </Typography>
              <DateHeaderLabel label='Posts' startDate={ESTIMATED_REACH.startDate} endDate={ESTIMATED_REACH.endDate} />
              <PieChartComponent data={getData(ESTIMATED_REACH)} />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card>
            <Stack gap={1} padding={1}>
              <Typography fontWeight='bold' fontSize={14}>
                PlatForms - Engagement
              </Typography>
              <DateHeaderLabel label='Posts' startDate={ENGAGEMENT.startDate} endDate={ENGAGEMENT.endDate} />
              <PieChartComponent data={getData(ENGAGEMENT)} />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PieWidget
