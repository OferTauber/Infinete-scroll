import { AppBar, Avatar, IconButton, Typography, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const LinkedIcon = ({
  children,
  href,
}: {
  children: JSX.Element;
  href: string;
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <IconButton sx={{ color: '#f6f6f6' }}>{children}</IconButton>
    </a>
  );
};

export default function Nav() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Avatar
          src={'https://rickandmortyapi.com/api/character/avatar/19.jpeg'}
        ></Avatar>
        <Typography
          variant="h6"
          component="div"
          sx={{ margin: '0 20px', flexGrow: 1 }}
        >
          Rick and Morrty Infinete Scroll
        </Typography>
        <Typography variant="h6">Ofer Tauber</Typography>
        <Typography
          variant="body1"
          sx={{ margin: '0 20px', lineHeight: '17px' }}
        >
          FullStack Developer
        </Typography>
        <LinkedIcon href="https://www.linkedin.com/in/ofertauber/">
          <LinkedInIcon />
        </LinkedIcon>
        <LinkedIcon href="https://github.com/OferTauber">
          <GitHubIcon />
        </LinkedIcon>
        <LinkedIcon href="mailto:ofertauber@gmail.com">
          <MailIcon />
        </LinkedIcon>
      </Toolbar>
    </AppBar>
  );
}
