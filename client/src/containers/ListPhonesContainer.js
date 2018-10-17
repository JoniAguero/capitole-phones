import React, { Component } from 'react';
import Phone from './../componentes/Phone/Phone';
import { Grid, Row } from 'react-flexbox-grid';

import { connect } from 'react-redux';
import { fetchPhones } from '../actions/phones/phonesActions';

import './ListPhonesContainer.css';

class ListPhonesContainer extends Component {

  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    const {phones} = this.props;
    return (
      <div className="container-phones">
        <h2 className="title">Equipos Disponibles</h2>
        {/* <Buscador busqueda={this.props.busquedaProducto} /> */}
        <Grid>
          <Row>
            {Object.keys(phones).map(phone => (
              <Phone info={phones[phone]}
                key={phone} />
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    phones: state.phones.phones
})
 
export default connect(mapStateToProps, { fetchPhones })(ListPhonesContainer);
