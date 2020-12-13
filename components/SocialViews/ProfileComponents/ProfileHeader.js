import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,SafeAreaView,Dimensions} from 'react-native';

export default class ProfileHeader extends Component{
    //Render profil header
    render(){
        return(
            <ImageBackground style={styles.headerBackground}>
                <SafeAreaView style = {styles.header}>
                    <View style= {styles.profilepicWrap}>
                        <Image style= {styles.profilepic } source={require('./Pictures/Milla.jpg')} />
                    </View>

                    <Text style= {styles.name}>Lene Nielsen</Text>
                    <Text style= {styles.pos}> - Niveau 24 - </Text>
                </SafeAreaView>

            </ImageBackground>
        );
    }
}

//Styleing
const styles = StyleSheet.create({
    headerBackground: {
        height: 200,
        backgroundColor: '#77948c'

    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    profilepicWrap: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 5,
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
    },
    name: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
    },
    pos:{
        fontSize:14,
        color:'#fff',
        fontStyle: 'italic'

    }


});

