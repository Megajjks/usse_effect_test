import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
    wraper: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent:"space-between",
      padding:"2em 5em"
    },
    
  }));

const CardList = () => {
    //declaro el state
    const [personajes, setPersonajes] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState()
    const [url, setUrl] = useState({
      now:"https://rickandmortyapi.com/api/character/",
      next:""
    })

    const fetchPersonaje = async (link) => {
      
      try{
          const response = await axios.get(link)
          setPersonajes(response.data.results)
          setUrl({
            ...url,
            now:response.info.prev,
            next:response.info.next
          })
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
        fetchPersonaje(url.now)
        console.log(isLoad)
        console.log(isLoad)
        //mi sanamiento (componentdDidUpdate y ComponentWillUnmount)
    },[])

    const classes = useStyles();
    console.log(personajes)
    const handleClick = () =>{

    }

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
            <div className={classes.wraper}>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Anterior
              </Button>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Siguiente
              </Button>
            </div>
          </div>
        }
      </div>
        
    )
}

export default CardList;