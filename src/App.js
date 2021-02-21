import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Main from './Main.js'
import Header from './Header.js'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333'
    },
    secondary: {
      main: '#FFFFFF'
    },
    background: {
      default: '#F0F0F0'
    }
  }
});

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <div className={classes.spacer}/>
        <Container maxWidth="md">
          <Main/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
