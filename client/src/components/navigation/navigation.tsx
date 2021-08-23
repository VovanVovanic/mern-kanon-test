
import { Button, Hidden, IconButton} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import AccHandlers from "../accHandlers/accHandlers";
import { useStyles } from "./navigation.styles";

const Navigation = () => {
  const classes = useStyles();

  const links = [
    { to: "/countries", name: "Countries" },
    { to: "/game", name: "My game" },
    { to: "/history", name: "History" },
  ].map(({ to, name }) => {
    return (
        <NavLink
          to={to}
          className={classes.link}
          activeStyle={{
            fontWeight: "bold",
            color: "gold",
          }}
        >
          {name}
        </NavLink>

    );
  });

  return (
    <div className={classes.root}>
      <nav className={classes.links}>
        <IconButton className={classes.iconBtn}>
          <HomeIcon className={classes.homeIcon} />
        </IconButton>
        <div className={classes.linkWrap}>{links}</div>
      </nav>
      <Hidden smDown>
        <AccHandlers />
      </Hidden>
    </div>
  );
}

export default Navigation