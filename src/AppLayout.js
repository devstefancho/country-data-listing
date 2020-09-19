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
  form: {
    //display: "inline-block",
    //marginLeft: "auto",
    //marginRight: "auto",
    //verticalAlign: "center",
  },
}));

const AppLayout = ({ submit, newSubmit, inputVal, load, loading, data }) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "3%" }}>
        <Grid container spacing={5}>
          <Grid item md={2} className={classes.grid}>
            <Paper className={[classes.paper, classes.formContainer]}>
              <SearchForm onSubmit={submit} className={classes.form} />
              <NewCountryDataForm
                onSubmit={newSubmit}
                className={classes.form}
              />
              <div> Input Value : {inputVal}</div>
            </Paper>
          </Grid>
          <Grid item md={10}>
            <Paper className={classes.paper}>
              <Fetch load={load} loading={loading} data={data} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AppLayout;
