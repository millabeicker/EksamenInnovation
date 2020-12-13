import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

//Tilpasser grid til størrelsen på skærmen
const windowWidth = Dimensions.get('window').width;
var IMAGES_PER_ROW = 3;

function calculatedSize() {
    var size = windowWidth / IMAGES_PER_ROW
    return {width: size, height: size}
}



export default class PhotoGrid extends Component {


//Tilføjer Dummy data billeder til profilen
    render(){
        return (
            <View>
                <ScrollView style ={{height: 320,}}>
                    <View style = {styles.photoGrid }>
                            <Image style ={styles.photo} source={require('./Pictures/1.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/2.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/3.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/4.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/5.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/6.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/7.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/8.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/3.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/4.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/5.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/6.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/7.jpg')}/>

                            <Image style ={styles.photo} source={require('./Pictures/8.jpg')}/>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

//Styleing
const styles = StyleSheet.create({
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    photo: {
        borderWidth: 2,
        borderColor: 'white',
        width: calculatedSize().width,
        height: calculatedSize().height,

    },

});
