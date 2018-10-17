import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPhoneById } from './../../actions/phones/phonesActions';

import LinearProgress from '@material-ui/core/LinearProgress';

import Caracteristicas from './Caracteristicas/Caracteristicas';

import Grid from '@material-ui/core/Grid';
import './PhoneSelected.css';

class PhoneSelected extends Component {

    componentDidMount() {
        this.props.fetchPhoneById(this.props.id);
    }


    render() {

        return (
            <div className="info-producto" >
                {
                    !this.props.ui_loaded || this.props.phoneSelected.length === 0 ? < LinearProgress variant = "query" / > :
                    <div>
                        <Grid container spacing={8}>
                            <Grid item xs={12} sm={4} md={3} lg={3}>
                                <div className="imagen">
                                    <img src={`${this.props.phoneSelected[0].image}`} alt={this.props.phoneSelected[0].name} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={8} md={9} lg={6}>
                                <h2>{this.props.phoneSelected[0].name}</h2>
                                <p className="precio">$ {this.props.phoneSelected[0].price}</p>
                                <Caracteristicas info={this.props.phoneSelected[0].caracteristicas_principales} />
                            </Grid>
                            <Grid item xs={12}>
                                <div className="info"> 
                                    <div className="info-caracteristicas">
                                        <h4 className="info-title">Características</h4>
                                        <div className="info-section">
                                            <ul>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.camara}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.sist}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.sim}
                                                </li>
                                                <li>
                                                    Red: {this.props.phoneSelected[0].caracteristicas_secundarias.red}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.ram}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.ram_interna}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.ram_externa}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="info-section">
                                            <ul>
                                                <li>
                                                    Batería: {this.props.phoneSelected[0].caracteristicas_secundarias.bateria}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.bateria_sb}
                                                </li>
                                                <li>
                                                    Peso: {this.props.phoneSelected[0].caracteristicas_secundarias.peso}
                                                </li>
                                                <li>
                                                    Red: {this.props.phoneSelected[0].caracteristicas_secundarias.dim}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.bluetooth}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.voz}
                                                </li>
                                                <li>
                                                    {this.props.phoneSelected[0].caracteristicas_secundarias.wifi}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <div className="description">
                                    <h3 className="description-title">Descripción</h3>
                                    <p>{this.props.phoneSelected[0].description}</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phoneSelected: state.phones.phoneSelected,
    ui_loaded: state.ui_loaded.loaded
})

export default connect(mapStateToProps, { fetchPhoneById })(PhoneSelected);
