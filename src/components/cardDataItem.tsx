import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

const STATUS = 'status';
const SPECIES = 'species';
const GENDER = 'gender';

const findeColor = (
  fildeName: string,
  value: string
):
  | 'error'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning' => {
  switch (fildeName) {
    case STATUS:
      if (value === 'Dead') return 'error';
      if (value === 'Alive') return 'success';
      return 'warning';
    case SPECIES:
      if (value === 'Human') return 'success';
      if (value === 'Animal') return 'warning';
      return 'secondary';
    case GENDER:
      if (value === 'Female') return 'secondary';
      if (value === 'Male') return 'primary';
      return 'info';
  }
  return 'default';
};

const CardDataItem = ({
  fildeName,
  value,
}: {
  fildeName: string;
  value: string;
}) => {
  return (
    <Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}
      >
        {fildeName}
      </Typography>
      <Chip
        label={value}
        color={findeColor(fildeName.toLowerCase(), value)}
        sx={{ margin: 'auto', width: 'fit-content' }}
      />
    </Box>
  );
};

export default CardDataItem;
