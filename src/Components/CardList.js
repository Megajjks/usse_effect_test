import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import axios from 'axios';
import CardView from './CardView'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent:"center",
      padding:"2em 5em"
    },
  }));

const CardList = () => {
    //declaro el state
    const [personajes, setPersonajes] = useState([])

    const fetchPersonaje = async () =>{
        const response = await axios.get("https://rickandmortyapi.com/api/character/")
        setPersonajes(response.data.results)
    }
    
    //Declaro el efecto
    useEffect(() => {
        //ComponentDidMount
        fetchPersonaje()
        //mi sanamiento (componentdDidUpdate y ComponentWillUnmount)
    },[])

    const classes = useStyles();
    console.log(personajes)

    return(
        
      <div>
        <Paper elevation={3} className={classes.root}>
          {personajes.map((personaje)=>(
            <CardView
              key={personaje.id}
              data = {personaje} 
            />
          ))}
        </Paper>
        <div>
          <ArrowRightIcon/>
          <ArrowLeftIcon/>
        </div>
      </div>
        
    )
}

export default CardList;