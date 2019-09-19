
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


//Styles 
import './Style/Marker.css';

//icono
//import icono1 from '../iconos/MapMarker-Blue.png';


//Se crea la constante como un anycompoenent para hacer el marcador se muestre.
const Marker = ({ text }) => <div>{text}</div>;

class Mapa extends Component {
    static defaultProps = {
        center: {
            lat: 17.99,
            lng: -92.94
        },
        iniciar: {
            lat: 17.9940921,
            lng: -92.9429324
        },
        terminar: {
            lat: 17.9894948,
            lng: -92.9236895


        },
        zoom: 11
    };

    render() {



        return (
            //¡Importante!  Establezca siempre la altura del contenedor explícitamente

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCXXVbP1CQtdJw8V32vLdKwX_gtp-V2uhg' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}


                >


                    <Marker
                        lat={this.props.iniciar.lat}
                        lng={this.props.iniciar.lng}
                        text="MArker 1"

                    />

                    <Marker
                        lat={this.props.terminar.lat}
                        lng={this.props.terminar.lng}
                        text="My Marker 2"
                    />
                </GoogleMapReact>

            </div>
        );
    }
}

export default Mapa;


