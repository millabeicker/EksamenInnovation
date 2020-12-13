import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Header extends Component {
    handleNavigation = () =>{
        this.props.navigation.openDrawer()
    }

    //Global header der bruges ved alle views
    render() {

        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.icon} onPress={this.handleNavigation}>
                    <MaterialCommunityIcons name="forwardburger" size={30} color="black" />
                </TouchableOpacity>

                <Image
                    style = {styles.picture}
                    source={{uri:'https://mst.dk/media/206599/MST-MIM-logo.png'}}
                />

            </View>
        )
    }
}

//Styleing
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    icon:{
        width:'15%',
        alignSelf: 'flex-start',
        paddingTop: 15
    },

    picture:{
        resizeMode: 'contain',
        width: 250,
        height: 40,
        alignSelf: 'center',
    }
})