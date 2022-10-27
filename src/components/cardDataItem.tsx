import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
// import FaceIcon from '@mui/icons-material/Face';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2px',
      }}
    >
      <Typography
        variant="body1"
        sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}
      >
        {fildeName}
      </Typography>
      <Box
        sx={{
          flexShrink: '0',
          flexBasis: '120px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Chip
          label={value === 'Mythological Creature' ? 'Mythological' : value}
          color={findeColor(fildeName.toLowerCase(), value)}
          // icon={<FaceIcon />}
        />
      </Box>
    </Box>
  );
};

export default CardDataItem;
