import React, { Component } from 'react';

import icono from '../iconos/blue.png';

export class Icono extends Component {
    render() {
        return (
            <img src={icono} alt="Marker" />
        )
    }
}

export default Icono;

