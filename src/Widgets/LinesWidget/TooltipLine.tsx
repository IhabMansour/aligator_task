import { Stack, Typography } from '@mui/material'

type Props = {
  color: string
  label: string
  percentage: string
  itemData: string
}

const TooltipLine = ({ color, label, percentage, itemData }: Props) => {
  return (
    <Stack>
      <Stack direction='row' gap='4px' alignItems='center'>
        <Typography bgcolor={color} width={9} height={9} borderRadius='50%' />
        <Typography fontSize={10}>{label || ''}</Typography>
      </Stack>
      <Stack direction='row' gap='4px' alignItems='center'>
        <Typography fontSize={10}>
          {percentage} - {itemData}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default TooltipLine
