import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//defino los estilos, esto es una propieda de material-ui, es opcional usarlo
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: "1em",
    },
    media: {
      height: 140,
    }
  });

const CardView = (props) =>{

    const {name,status,species,gender, image} = props.data //destructuro mis props

    const classes = useStyles();

    return(
      <Card className={classes.root}>
        <img
            src={image}
            alt={`fig: ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status : {status} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species : {species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender : {gender}
          </Typography>
        </CardContent>
    </Card>
    );
}

export default CardView;