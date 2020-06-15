import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import axios from 'axios';
import CardView from './CardView'
import Loader from './Loader'


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
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState()

    const fetchPersonaje = async () => {
      
      try{
          const response = await axios.get("https://rickandmortyapi.com/api/character/")
          setPersonajes(response.data.results)
          setIsLoad(false)
        }catch(e){
          setError(e)
          console.log(error)
          setIsLoad(false)
        }
      console.log(isLoad)
    }

    
    //Declaro el efecto
    useEffect(() => {
        //ComponentDidMount
        fetchPersonaje()
        console.log(isLoad)
        console.log(isLoad)
        //mi sanamiento (componentdDidUpdate y ComponentWillUnmount)
    },[])

    const classes = useStyles();
    console.log(personajes)

    return(
        
      <div>
        {isLoad?
          <Loader />
          :
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
              <ArrowLeftIcon/>
              <ArrowRightIcon/>
            </div>
          </div>
        }
      </div>
        
    )
}

export default CardList;