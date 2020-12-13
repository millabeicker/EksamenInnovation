import React, {Component} from 'react';
import { Text, View, StyleSheet, AppRegistry, SafeAreaViewBase } from 'react-native';

export default class Bar extends Component {
//Tilføjer bare med rangliste og antal billeder for styleing
    render(){
        return (
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.barseparator]}>
                    <Text style={styles.barBottom}>Rangliste:</Text>
                    <Text style={styles.barTop}>47</Text>
                </View>
                <View style={[styles.barItem]}>
                    <Text style={styles.barBottom}>Billeder:</Text>
                    <Text style={styles.barTop}>15</Text>
                </View>

            </View>
        );
    }
}

//Styleing
const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        backgroundColor:'#3f4a46',
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 4


    },
    barseparator:{
        borderRightWidth: 4,
        borderColor: '#fff',
    },
    barItem:{
        flex: 1,
        padding: 18,
        alignItems: 'center',

    },
    barTop:{
        color: '#fff',
        fontSize: 16,
        fontStyle:'italic'
    },
    barBottom:{
        color:'#fff',
        fontSize: 14,
    }
});
