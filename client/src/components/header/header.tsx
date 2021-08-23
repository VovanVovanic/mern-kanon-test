
import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import AccHandlers from "../accHandlers/accHandlers";
import Navigation from "../navigation/navigation";
import { useStyles } from "./header.styles";

const Header = () => {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            {/* <Typography variant="h5" className={classes.message}>
              Please login or register
            </Typography> */}
            <Navigation />
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <AccHandlers />
        </Hidden>
      </div>
    );
  }
  
export default Header;
