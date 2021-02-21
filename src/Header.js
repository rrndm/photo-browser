import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PhotoIcon from '@material-ui/icons/Photo';
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography variant="h6">Photo Browser</Typography>
        </Link>
        <div className={classes.grow}/>
        <Tooltip title="Users" arrow>
          <IconButton color="secondary">
            <Link to='/users' className={classes.link}>
              <PersonIcon/>
            </Link>
          </IconButton>
        </Tooltip>
        <Tooltip title="Albums" arrow>
          <IconButton color="secondary">
            <Link to='/albums' className={classes.link}>
              <PhotoLibraryIcon/>
            </Link>
          </IconButton>
        </Tooltip>
        <Tooltip title="Photos" arrow>
          <IconButton color="secondary">
            <Link to='/photos' className={classes.link}>
              <PhotoIcon/>
            </Link>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
