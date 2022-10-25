import { useEffect, useState } from 'react';
import CharacterCard from './Card';
import Character from '../utiles/CarecterDTO';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

const List = () => {
  const [a, setA] = useState<false | Character>(false);

  const fetchCahr = async (): Promise<void> => {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character/52');
      const character: Character = await res.json();

      setA(character);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCahr();
  }, []);

  if (!a) return <div>List</div>;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
          <CharacterCard character={a} />
        </Grid>
      </Container>
    </>
  );
};

export default List;

// import * as React from 'react';

// import Box from '@mui/material/Box';

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
