import { Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h1"
        color="azure"
        align="center"
        sx={{ fontSize: '4rem' }}
      >
        Rick and Morrty Infinete Scroll!
      </Typography>
      <Typography
        variant="h4"
        color="azure"
        align="center"
        sx={{ margin: '25px' }}
      >
        Scroll down to discover more and more hilarious characters from Rick and
        Morty's wild universe
      </Typography>
      <Typography variant="h5" color="azure">
        {
          'This small project implements infinite scrolling using React query. You are more than welcome to check out more projects on my GitHub account, as well as contact me :)'
        }
      </Typography>
    </Container>
  );
};

export default Hero;
