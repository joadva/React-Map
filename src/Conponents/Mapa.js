import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


//Styles 
//import './Style/Marker.css';

//icono Marker
import Icono from './icono';
import Marker2 from './Marker2';
import Marker3 from './Marker3';
import Marker4 from './Marker4';

//Repartidor
import Repartidor from './RepartidorIcon';
import Repartidor2 from './Repartidor2';
import Repartidor3 from './Repartidor3';
import Repartidor4 from './Repartidor4';
//Se crea la constante como un anycompoenent para hacer el marcador se muestre.
//const Marker = ({ text }) => <div>{text}</div>;

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
        repartidor: {
            lat: 17.9922123,
            lng: -92.9337137,
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


                    <Icono
                        lat={this.props.iniciar.lat}
                        lng={this.props.iniciar.lng}
                        text="MArker 1"

                    />


                    <Icono
                        lat={this.props.terminar.lat}
                        lng={this.props.terminar.lng}
                        text="My Marker 2"
                    />

                    <Marker2
                        lat={17.9958015}
                        lng={-92.9477166}


                    />
                    <Marker2
                        lat={18.001508}
                        lng={-92.925009}


                    />

                    <Marker3
                        lat={18.002083}
                        lng={-92.941818}

                    />

                    <Marker3
                        lat={17.998450}
                        lng={-92.932827}

                    />

                    <Marker4
                        lat={18.005409}
                        lng={-92.933243}

                    />

                    <Marker4
                        lat={17.999640}
                        lng={-92.927176}

                    />

                    <Repartidor
                        lat={this.props.repartidor.lat}
                        lng={this.props.repartidor.lng}

                    />


                    <Repartidor2
                        lat={17.997554}
                        lng={-92.940485}

                    />
                    <Repartidor3
                        lat={18.001773}
                        lng={-92.929847}

                    />
                    <Repartidor4
                        lat={18.000212}
                        lng={-92.937937}

                    />


                </GoogleMapReact>

            </div>
        );
    }
}

export default Mapa;


