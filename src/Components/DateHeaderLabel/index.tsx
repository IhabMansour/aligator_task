import { Typography } from '@mui/material'
import { formatDate } from '../../Utilities'

type Props = {
  startDate: number
  endDate: number
  label: string
}

const DateHeaderLabel = ({ startDate, endDate, label }: Props) => {
  return (
    <Typography fontSize={12} color='gray'>
      {formatDate(startDate, true)} - {formatDate(endDate, true)} | {label}
    </Typography>
  )
}

export default DateHeaderLabel
