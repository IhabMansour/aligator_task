import { Stack, Tooltip, Typography } from '@mui/material'
import TooltipLine from './TooltipLine'
import { DATA_COLORS } from '../../Utilities/constants'
import { BodyData } from '../../Interfaces'

type Props = {
  keyIndex: number
  item: BodyData
  objectKey: string
}

const LineChild = ({ keyIndex, item, objectKey }: Props) => {
  const calculateTotal = (obj: BodyData) => {
    let total = 0
    for (const key in obj) {
      if (key !== 'keyword') {
        total += Number(obj[key])
      }
    }
    return total
  }

  const calculatePercentage = (obj: BodyData, property: string) => {
    const total = calculateTotal(obj)
    if (obj.hasOwnProperty(property) && property !== 'keyword') {
      return ((Number(obj[property]) / total) * 100).toFixed(2)
    }
    return 0
  }

  return (
    <Stack width={`${calculatePercentage(item, objectKey)}%`} height={50} alignItems='center' justifyContent='center' position='relative'>
      {
        <Typography height={20} position='absolute' top='0px' fontSize={12} fontWeight='bold'>
          {Number(calculatePercentage(item, objectKey)) > 7 && `${calculatePercentage(item, objectKey)} %`}
        </Typography>
      }
      <Tooltip
        title={
          <TooltipLine
            color={DATA_COLORS?.[objectKey]}
            label={objectKey}
            percentage={`${calculatePercentage(item, objectKey)} %`}
            itemData={String(item?.[objectKey])}
          />
        }
      >
        <Typography
          bgcolor={DATA_COLORS?.[objectKey]}
          width='100%'
          height={10}
          borderRadius={keyIndex === 1 ? '5px 0 0 5px' : keyIndex === Object.keys(item).length - 1 ? '0 5px 5px 0' : ''}
        />
      </Tooltip>
    </Stack>
  )
}

export default LineChild
