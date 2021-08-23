import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
    },
    links: {
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      margin: "0 100px 0 0",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
    link: {
      fontSize: "10px",
      textDecoration: "none",
      color: "white",
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
      },
    },
    linkWrap: {
      display: "flex",
      minWidth: "200px",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    },
    iconBtn: {
      height: "30px",
      margin: 0,
      padding: 0,
    },
    homeIcon: {
      height: "20px",
    },
  })
);
