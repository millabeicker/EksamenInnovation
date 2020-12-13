import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Accuracy} from "expo-location";
import Header from "../Header";

export default class MapScreen extends React.Component {
    mapViewRef = React.createRef();

    state = {
        //Undersøger om der er tilladelse til lokation
        hasLocationPermission: null,
        //Ser på brugerens nuværende lokaltion
        currentLocation: null,

        //Markører
         items: []
    };

    //får tilladelse til at bruge lokation
    getLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({ hasLocationPermission: status });
    };

    //Henter data fra arter.dk
    componentDidMount = async () => {
        await this.getLocationPermission();
        fetch('https://arpo-prod-api-app.azurewebsites.net/records/?searchText=&take=200&zoomLevel=6.666666666666667&mapBounds=2.6751556015624987&mapBounds=51.60844029913605&mapBounds=17.199081382812498&mapBounds=58.80575519852428&speciesGroups=Pattedyr&speciesGroups=Fugle&searchMode=3&includeDescendantTaxons=true&isDeleted=&hasMedia=false&excludeSaughtButNotFound=true&includeSpeciesGroupFacet=false&includeOrphanRecords=false&url=')
            .then(res => res.json())
            .then(data => {
                this.setState({ items: data.items })
            })
            .catch(console.error)
    };



    //Opdatere lokationen
    updateLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced});
        this.setState({ currentLocation: coords });
    };


    //Render af brugerens nuværende lokation
    renderCurrentLocation = () => {
        //Viser ingenting hvis der ikke er adgang.
        const { hasLocationPermission} = this.state;
        if (hasLocationPermission === null) {
            return null;
        }
    };

    //tilføjer markers
    mapMarkers = () => {
        return this.state.items.map((items) => <Marker
            key={items.id}
            coordinate={{ latitude: items.geoLocation.latitude, longitude: items.geoLocation.longitude }}

        >
            <Callout>
                <View style={styles.container}>
                    <Text style={{fontFamily: "Cochin", fontSize: 20, padding: 2}}>Navn: {items.acceptedVernacularName}</Text>

                    <Text style={{fontFamily: "Cochin", fontSize: 20, padding: 2}}>Artgruppe: {items.speciesGroup}</Text>

                    <Text style={{fontFamily: "Cochin", fontSize: 20, padding: 2}}>Fundet af: {JSON.stringify(items.observers)}</Text>


                </View>
            </Callout>

        </Marker >)
    }


    //Main render viser et map og user lokation. indeholder markører fra arter.dk databasen
    render() {

            return (
                    <View style={styles.container}>
                        <Header navigation={this.props.navigation}/>

                        <MapView
                            style={styles.map}
                            showsUserLocation
                            initialRegion={{
                                latitude: 55.6515204,
                                longitude: 12.5043674,
                                latitudeDelta: 0.0932,
                                longitudeDelta: 0.0420,
                            }}
                        >

                            {this.mapMarkers()}

                        </MapView>

                    </View>

            );

    }
}

//Styleing
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    map: {
        flex: 1,
    },


});