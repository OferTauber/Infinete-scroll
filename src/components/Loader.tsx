import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Loader = ({ isLoagind }: { isLoagind: boolean }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <br />
      {isLoagind ? <LinearProgress variant={'indeterminate'} /> : <br />}
      <br />
    </Box>
  );
};

export default Loader;
