import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accHandlers: {
      display: "flex",
      justifyContent: "space-between",
      minWidth: "220px",
      [theme.breakpoints.down("md")]: {
        margin: "10px 28px",
        justifyContent: "flex-end",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "8px 14px",
      },
    },
    logout: {
      textTransform: "uppercase",
      fontSize: "10px",
      fontFamily: "times new roman",
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
      },
    },
    delete: {
      fontSize: "10px",
      fontWeight: "bold",
      fontFamily: "times new roman",
      border: "1px solid red",
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
      },
    },
  })
);
