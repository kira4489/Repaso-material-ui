import {AppBar,Toolbar,Typography,makeStyles} from "@material-ui/core";
import theme from "../Styles/Config";

const useStyles = makeStyles(theme=>({
  offset: theme.mixins.Toolbar
}))
 
const Navbar = () =>{
const classes = useStyles()
 return (
 <div>
     <AppBar position="fixed" color="primary">
         <Toolbar>
             <Typography variant="h5">
                Hola
             </Typography>
         </Toolbar>
     </AppBar>
     <div className={classes.offset}>
     </div>
 </div>
 )
}

export default Navbar