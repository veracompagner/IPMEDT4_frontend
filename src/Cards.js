import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
root: {
  borderRadius: "20px",
  width: "80%",
  backgroundColor: "#FFC61E",
  padding: "20px",
  boxShadow: "3px 3px 3px #ccc"
},
img:
{
  padding: "5px",
  backgroundColor: "white",
  margin: "5px",
  width: "30%",
  position: "relative",
  border: "5px solid #003373",
  borderRadius: "10px",
},
text: {
 position: "relative",
 float: "right",
 marginRight: "40px",
 
}

})

function Cards(props){
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <img className={classes.img} src={props.img} alt="appLogo"></img>
        <div className={classes.text}>

          <h2> {props.title || "titel"}</h2>
          {props.text || "Geen tekst beschikbaar"}
        </div>

  
      </div>
    );
  


  
}

export default Cards;