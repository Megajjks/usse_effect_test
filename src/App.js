import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CardList from './Components/CardList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () =>{
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static" color="primary">
          <Typography variant="h2" className={classes.title} align="center">
            Personajes de Rick and Morty
          </Typography>
      </AppBar>
      <CardList/>
    </div>
  )
}

export default App;
