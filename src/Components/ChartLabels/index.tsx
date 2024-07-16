import { Stack, Typography } from '@mui/material'
import { PieValueType } from '@mui/x-charts'

type Props = {
  data: PieValueType[]
}

const PieLabels = ({ data }: Props) => {
  return (
    <Stack direction='row' gap={2} justifyContent='center'>
      {data?.map((item, index) =>
        index < 3 ? (
          <Stack direction='row' gap='4px' alignItems='center'>
            <Typography bgcolor={item.color} width={9} height={9} borderRadius='50%' />
            <Typography fontSize={10}>{String(item.label)}</Typography>
          </Stack>
        ) : index === 3 ? (
          <Stack key={index} bgcolor='turquoise' width='auto' padding='4px 8px' borderRadius='4px'>
            <Typography fontSize={10} color='white'>
              + {data?.length - 3}
            </Typography>
          </Stack>
        ) : null
      )}
    </Stack>
  )
}

export default PieLabels
