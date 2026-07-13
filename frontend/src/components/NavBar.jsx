import { AppBar, Toolbar, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <TerminalIcon sx={{ mr: 0.5 }} />

        <Typography 
            variant="h5"
            sx={{ 
                fontWeight: "bold",
                letterSpacing: "1",
            }}
        >
            Hello There, Welcome To CodeLens
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;