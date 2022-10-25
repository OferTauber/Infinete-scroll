import Card from '@mui/material/Card';
import Character from '../utiles/CarecterDTO';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardDataItem from './cardDataItem';
import Grid from '@mui/material/Unstable_Grid2';

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Grid xs={4}>
      <Card sx={{ maxWidth: 300 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}
        >
          {character.name}
        </Typography>
        <CardMedia
          sx={{ maxWidth: 200, margin: 'auto' }}
          component="img"
          image={character.image}
          alt={character.name}
        />

        <CardContent>
          <Stack
            direction={'row'}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <CardDataItem fildeName="Status" value={character.status} />
            <CardDataItem fildeName="Gender" value={character.gender} />
            <CardDataItem fildeName="Species" value={character.species} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
