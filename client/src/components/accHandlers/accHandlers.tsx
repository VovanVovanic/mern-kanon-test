import { Button } from "@material-ui/core";
import { useStyles } from "./assHandlers.styles";

const AccHandlers = () => {
  const classes = useStyles();

  return (
    <div className={classes.accHandlers}>
      <Button variant="contained" className={classes.logout} color="default">
        Logout
      </Button>
      <Button variant="contained" className={classes.delete} color="secondary">
        delete account
      </Button>
    </div>
  );
};

export default AccHandlers;
