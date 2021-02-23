import React, { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { getUser } from '../appService.js'

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: 800,
    maxWidth: 600,
    margin: "auto"
  },
  initials: {
    float: "left"
  },
  spacer: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  bodyFlex: {
    display: "flex",
    justifyContent: "space-between"
  },
  contactInfo: {
  },
  companyInfo: {
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%"
  },
  content: {
    maxWidth: "100%"
  },
  title: {
    maxWidth: "100%"
  }
}));

function UserView() {

  const [user, setUser] = useState()

  const classes = useStyles();

  const { userId } = useParams()
  const match = useRouteMatch()

  useEffect(async () => {
    const result = await getUser(userId)
    const resultJson = await result.json()

    setUser(resultJson);
  }, [userId]);

  return (
    <React.Fragment>
      {
        user
        ? <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography variant="h1" className={classes.initials}>
                {user.name.charAt(0)}{user.name.split(' ')[1].charAt(0)}
              </Typography>
              <div className={classes.spacer}/>
              <Typography align="center" variant="h4">
                {user.username}
              </Typography>
              <Typography align="center" variant="h6" color="textSecondary">
                {user.name}
              </Typography>
              <div className={classes.spacer}/>
              <div className={classes.spacer}/>
              <div className={classes.bodyFlex}>
                <div className={classes.contactInfo}>
                  <Typography variant="subtitle2" color="textSecondary">
                    {user.email}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {user.phone}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {user.website}
                  </Typography>
                </div>
                <div className={classes.spacer}/>
                <div className={classes.companyInfo}>
                  <Typography align="center" variant="h5" gutterBottom>
                    Company info
                  </Typography>
                  <Typography variant="h6">
                    {user.company.name}
                  </Typography>
                  <Typography variant="subtitle2">
                    "{user.company.catchPhrase}" - {user.company.bs}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Link to={`${match.url}/albums`} className={classes.link}>
                <Button fullWidth variant="outlined">
                  View albums
                </Button>
              </Link>
            </CardActions>
          </Card>
        : null
      }
    </React.Fragment>
  );
}

export default UserView;
