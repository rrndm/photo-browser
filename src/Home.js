import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PhotoIcon from '@material-ui/icons/Photo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%"
  },
  spacer: {
    height: theme.spacing(2)
  },
  cardFlex: {
    display: "flex",
    justifyContent: "space-between",
    margin: 20
  },
  icon: {
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography align="center" variant="h3" gutterBottom>
        Welcome to Photo Browser app
      </Typography>
      <div className={classes.spacer}/>
      <Card className={classes.card}>
        <Link to={'/users'} className={classes.link}>
          <CardActionArea>
            <div className={classes.cardFlex}>
              <PersonIcon fontSize="large" className={classes.icon}/>
              <Typography variant="h5">View a list of users with albums.</Typography>
            </div>
          </CardActionArea>
        </Link>
      </Card>
      <div className={classes.spacer}/>
      <Card className={classes.card}>
        <Link to={'/albums'} className={classes.link}>
          <CardActionArea>
            <div className={classes.cardFlex}>
              <PhotoLibraryIcon fontSize="large" className={classes.icon}/>
              <Typography variant="h5">View a list of all albums from various users.</Typography>
            </div>
          </CardActionArea>
        </Link>
      </Card>
      <div className={classes.spacer}/>
      <Card className={classes.card}>
        <Link to={'/photos'} className={classes.link}>
          <CardActionArea>
            <div className={classes.cardFlex}>
              <PhotoIcon fontSize="large" className={classes.icon}/>
              <Typography variant="h5">View a list of photos from all albums.</Typography>
            </div>
          </CardActionArea>
        </Link>
      </Card>
    </React.Fragment>
  );
}

export default Home;
