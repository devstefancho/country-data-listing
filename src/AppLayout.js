import React from "react";
import Fetch from "./components/Fetch";
import SearchForm from "./container/SearchForm";
import NewCountryDataForm from "./container/NewCountryDataForm";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {},
  formContainer: {
    position: "fixed",
    height: "90vh",
  },
  formContainer: {},
}));

const AppLayout = ({ load, loading }) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "3%" }}>
        <Grid container spacing={5}>
          <Grid item md={2} className={classes.grid}>
            <Paper className={`${classes.paper} ${classes.formContainer}`}>
              <SearchForm className={classes.formSearch} />
              <div style={{ margin: 50 }}></div>
              <NewCountryDataForm className={classes.formRow} />
              <div style={{ margin: 20 }}></div>
            </Paper>
          </Grid>
          <Grid item md={10}>
            <Paper className={classes.paper}>
              <Fetch load={load} loading={loading} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AppLayout;
