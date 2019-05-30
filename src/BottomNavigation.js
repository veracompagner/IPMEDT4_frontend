import React from 'react';
// import "./BottomNavigation.css"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    marginTop: "190px",
    width: "100%",
    backgroundColor: "#003373",
    paddingTop: "10px",
    paddingBottom: "10px",
    
  },
  selected: {
    color: "white",
    
    '&$selected': {
      color: "white",
      
    },
  },
  label: {
    color: "white",
    fontSize: "40px",
    
  }
});

function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Acties" value="Acties" icon={<FavoriteIcon className={classes.label}/>} className={(classes.selected)}/>
      <BottomNavigationAction label="Vertraging" value="vertraging" icon={<LocationOnIcon className={classes.label}/> } className={classes.selected} />
    </BottomNavigation>
  );
}


export default LabelBottomNavigation
