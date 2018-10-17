import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';
import ListPhonesContainer from './containers/ListPhonesContainer';
import { Header, Banner, NotFound, Nosotros, Contacto, PhoneSelected } from './componentes/';

import { Grid } from 'react-flexbox-grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <Banner />
            <div className={classes.root}>
              <Grid spaspacing={24}>
                <Switch>
                  <Route exact path="/" component={ListPhonesContainer} />
                  <Route exact path="/phones" component={ListPhonesContainer} />
                  <Route exact path="/phones/:id" render={(props) => {
                    let idProducto = props.location.pathname.replace('/phones/', '');
                    return (
                      <PhoneSelected id={idProducto} />
                    )
                  }} />
                  <Route exact path="/nosotros" component={Nosotros} />
                  <Route exact path="/contacto" component={Contacto} />
                  <Route component={NotFound} />
                </Switch>
              </Grid>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
