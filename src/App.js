import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import List from './List.js'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333'
    }
  }
});

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">Photo Browser</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.spacer}/>
        <Container maxWidth="md">
          <List/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
