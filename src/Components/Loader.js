import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent:"space",
      padding:"2em 5em"
    },
    card:{
        margin: "1em",
    }
}));

const Loader = () =>{
      const classes = useStyles();
      const size = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return(
        <div>
            <Paper elevation={3} className={classes.root}>
                {size.map((item)=>(
                    <div className={classes.card} key={item}>
                        <Skeleton variant="rect" width={300} height={118} />
                        <Skeleton animation="wave" width={300}/>
                        <Skeleton animation="wave" width={300}/>
                        <Skeleton animation="wave" width={300}/>
                    </div>
                ))}
            </Paper>
        </div>
    )
}

export default Loader