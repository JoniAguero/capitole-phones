import React, { Component } from 'react'

import './Nosotros.css';

export class Nosotros extends Component {
  render() {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src="/img/camisa_1.png" alt="imagen nosotros" />
        </div>
        <div className="contenido">
          <h2>
            Sobre Nosotros
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies commodo tincidunt. Pellentesque ullamcorper nisi vel dictum lacinia. Nam eget orci nec risus aliquam molestie non in massa. Mauris rhoncus finibus orci ut imperdiet. Vestibulum tempor porttitor libero, eget varius urna feugiat eu. Aenean sagittis vel nibh eget blandit. Curabitur vulputate dapibus justo tempor aliquet. Suspendisse at augue tempus, viverra tellus in, suscipit neque. Quisque nec cursus ex. Morbi lacinia vestibulum volutpat.
          </p>
        </div>
      </div>
    )
  }
}

export default Nosotros;
