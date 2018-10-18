import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Cart from '../Cart/Cart';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

class Header extends Component {

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {

    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}> 
        <MenuItem><Link className="link" to={'/phones'}>Equipos</Link></MenuItem>
        <MenuItem><Link className="link" to={'/contacto'}>Contacto</Link></MenuItem>
        <MenuItem><Link className="link" to={'/nosotros'}>Nosotros</Link></MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to={'/'}>
              <img className="header-img" src="./img/logo.png" alt="logo"></img>
            </Link>
            <div className="navigation">
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                <NavLink className="link" activeClassName='is-active' to={'/phones'}>
                  Equipos
                </NavLink>
                <NavLink className="link" activeClassName='is-active' to={'/nosotros'}>
                  Nosotros
                </NavLink>
                <NavLink className="link" activeClassName='is-active' to={'/contacto'}>
                  Contacto
                </NavLink>
              </Typography>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Cart />
            </div>
            <div className={classes.sectionMobile}>
              <Cart / >
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
