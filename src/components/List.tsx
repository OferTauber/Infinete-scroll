import CharacterCard from './Card';
import Character from '../utiles/CarecterDTO';
import { Container, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Loader from './Loader';

const List = () => {
  const { ref, inView } = useInView();

  const fetchCharacters = async ({
    pageParam = 'https://rickandmortyapi.com/api/character?page=1',
  }) => {
    const res = await fetch(pageParam);
    return await res.json();
  };

  const { data, error, fetchNextPage, isFetching, status, hasNextPage } =
    useInfiniteQuery(['RickAndMorty'], fetchCharacters, {
      getNextPageParam: (lastPage, pages) => {
        void pages;
        return lastPage.info.next;
      },
    });

  const mapCards = () => {
    if (!data) return [];

    const pages: Array<any> = data.pages;
    return pages.reduce((acc, cur) => {
      const cards = acc.concat(
        cur.results.map((char: Character) => (
          <CharacterCard key={char.id} character={char} />
        ))
      );
      const refDiv = <div ref={ref} key={'dummy-ref' + cards.length}></div>;
      cards.splice(cards.length - 5, 0, refDiv);
      return cards;
    }, []);
  };

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'error') {
    console.log(error);
    return <div>Error!</div>;
  }

  return (
    <>
      <br />
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {mapCards()}
        </Grid>
        <Loader isLoagind={isFetching} />
      </Container>
    </>
  );
};

export default List;
