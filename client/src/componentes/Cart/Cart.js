import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Items } from './Items/Items';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Cart extends Component {

    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        return (
            <div>
                <IconButton color="inherit" onClick={this.handleClickOpen}>
                    <Badge badgeContent={this.props.cart.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Items seleccionados. ¿Desea finalizar la compra?"}
                    </DialogTitle>
                    <DialogContent>
                        <div>
                            <Items items={this.props.cart}/>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Cancelar
                         </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.items
})

export default connect(mapStateToProps)(Cart);
