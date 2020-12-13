import React, { useState, useEffect } from 'react';
import {
    Alert,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ScrollView,
    StatusBar,
    TextInput,

} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Header from "../Header";

StatusBar.setBarStyle('dark-content', true);

export default class UploadPictureView extends React.Component  {


    state = {
        image: 'null',
        hasCameraRollPermission: null,
        location: null

    }


    //Vælger billede fra kamera rulle
    pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // Virker kun på android... Ellers skal man hente ImageManipulator API
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri});
        }
    };

    componentDidMount() {
        this.updateCameraPermission();
    }

    //Sørger for at der er tilladelse til at bruge kamera
    updateCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    //åben kamera funktionen - vælger et billede
    openCamera = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // Virker kun på android... Ellers skal man hente ImageManipulator API
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri});
        }
    };

    //Alert der kommer frem når der uploades
    uploadAlert = () =>{
        Alert.alert("Uploaded! Du modtager en notifikation når dit fund er verficeret. Vend tilbage for at se om du gættede rigtigt!")
    }



    //Render vores view - med funktioner og input felter. 
    render() {

        return (
            <ScrollView>
                <Header navigation={this.props.navigation}/>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={styles.pickPhotoButton}
                            onPress={this.pickImage}
                            underlayColor='#fff'>
                            <Text style={styles.photoPickTextButton}>Pick Image!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.pickPhotoButton}
                            onPress={this.openCamera}
                            underlayColor='#fff'>
                            <Text style={styles.photoPickTextButton}>Take New!</Text>
                        </TouchableOpacity>
                    </View>



                    <View>
                        <Image
                            style = {styles.picture}
                            source={{uri: this.state.image}}
                        />
                    </View>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>

                    <Text style={styles.textOverTextInputBox}>Art:</Text>
                    <TextInput style={styles.textInputBox}></TextInput>

                    <Text style={styles.textOverTextInputBox}>Lokation:</Text>
                    <TextInput style={styles.textInputBox}></TextInput>

                    <TouchableOpacity
                        style={styles.button}
                        onPress = {this.uploadAlert}
                    >
                        <Text style={styles.text}> upload</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        );
    }

}


//Styleing
const styles = StyleSheet.create({
    pickPhotoButton:{
        margin: 7,
        marginBottom: 0.5,
        marginTop:10,
        paddingTop:10,
        paddingBottom:15,
        backgroundColor:'#002f25',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    photoPickTextButton:{
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        color:'#fff'

    },
    textInputBox:{
        width: 250,
        fontSize: 20,
        padding: 5,
        borderWidth: 2,
        borderColor: 'black',

    },
    textOverTextInputBox:{
        fontSize: 20,
        padding: 12,
        marginLeft: 45,
        alignSelf: 'flex-start'
    },
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center"
    },

    button: {
        alignItems: "center",
        backgroundColor: "#7c9c8c",
        width: 250,
        borderRadius: 10,
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        margin: 15
    },

    text: {
        paddingTop: 5,
        fontSize: 18,
        textAlign: "center",
    },

    picture:{
        resizeMode: 'stretch',
        width: 250,
        height: 200,
        alignSelf: 'center',
        borderColor: 'grey',
        borderWidth: 2
    }

});