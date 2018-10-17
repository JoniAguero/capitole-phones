import React, { Component } from 'react';

import './Contacto.css';

export class Contacto extends Component {
  render() {
    return (
      <form>
        <legend>Contacto</legend>
        <div className="input-field">
            <label>Nombre:</label>
            <input type="text" placeholder="Nombre"></input>
        </div>
        <div className="input-field">
            <label>Email:</label>
            <input type="email" placeholder="Email"></input>
        </div>
        <div className="input-field">
            <label>Mensaje:</label>
            <textarea placeholder="Deja tu mensaje.."></textarea>
        </div>
        <div className="input-field enviar">
            <input type="submit" value="Enviar"></input>
        </div>
      </form>
    )
  }
}

export default Contacto;
