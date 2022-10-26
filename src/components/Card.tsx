import Character from '../utiles/CarecterDTO';
import { CardMedia, CardContent, Typography, Card } from '@mui/material';
import CardDataItem from './cardDataItem';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Grid xs={12} md={6} lg={4} xl={3}>
      <Card sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'canter', height: '4rem' }}>
          <Typography
            align="center"
            gutterBottom
            variant="h6"
            component="div"
            alignContent="a"
            sx={{
              display: 'block',
              margin: 'auto',
              width: 'fit-content',
            }}
          >
            {character.name}
          </Typography>
        </Box>
        <CardMedia
          sx={{ maxWidth: 200, margin: 'auto' }}
          component="img"
          image={character.image}
          alt={character.name}
        />

        <CardContent
          sx={{
            height: '150px',
          }}
        >
          <CardDataItem fildeName="Status" value={character.status} />
          <CardDataItem fildeName="Gender" value={character.gender} />
          <CardDataItem fildeName="Species" value={character.species} />
        </CardContent>
      </Card>
    </Grid>
  );
}
