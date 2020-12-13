import React, {Component} from 'react';
import Header from "../Header";
import { Text, View, StyleSheet, AppRegistry, SafeAreaView } from 'react-native';
import Bar from "./ProfileComponents/Bar";
import PhotoGrid from "./ProfileComponents/PhotoGrid";
import ProfileHeader from "./ProfileComponents/ProfileHeader";


// render profileView ved at hente komponenterne fra profilecomponents
export default class ProfileView extends Component {
    render() {
        return(
            <View>
                <View>
                    <Header navigation={this.props.navigation}/>
                </View>

                <View style={styles.container}>
                    <ProfileHeader/>
                    <Bar/>
                    <PhotoGrid/>
                </View>

            </View>

        );
    };

}

const styles = StyleSheet.create({
    container: {
        height:'100%'

    }
});