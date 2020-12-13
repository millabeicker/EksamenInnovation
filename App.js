import React from 'react';
import {createAppContainer} from "react-navigation";
import MapView from "./components/AnimalViews/MapView";
import LoginView from "./components/LoginView";
import ProfileView from "./components/SocialViews/ProfileView";
import {createBottomTabNavigator} from "react-navigation-tabs";
import UploadPictureView from "./components/AnimalViews/UploadPictureView";
import { SafeAreaView, StyleSheet } from 'react-native'
import {createSwitchNavigator} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ScoreboardView from "./components/SocialViews/ScoreboardView";
import firebase from "firebase";


//Bottom navigation til animal views
const AnimalViewNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        MapView: {
            /*HVilket view skal loades*/
            screen: MapView,
            /*Instillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:"Map",
                /*Ikon*/
                tabBarIcon: ({ black }) => (
                    <Feather name="map" size={24} color="black" />
                )
            },
        },
        /*Navn på Route*/
        UploadPictureView: {
            screen: UploadPictureView,
            navigationOptions: {
                tabBarLabel:"UploadPicture",
                tabBarIcon: ({ black }) => (
                    <Feather name="camera" size={24} color="black" />
                )
            },
        },
    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            style: {
                backgroundColor: '#77948c',
            },
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            size:40
        }
    }
)

//Bottom tab navigation til Social views
const SocialViewsNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        ProfileView: {
            /*HVilket view skal loades*/
            screen: ProfileView,
            /*Instillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:"Profile",
                /*Ikon*/
                tabBarIcon: ({ black }) => (
                    <MaterialIcons name="face" size={24} color="black" />
                )
            },
        },
        /*Navn på Route*/
        ScoreboardView: {
            screen: ScoreboardView,
            navigationOptions: {
                tabBarLabel:"Scoreboard",
                tabBarIcon: ({ black }) => (
                    <Ionicons name="ios-trophy" size={24} color="black" />
                )
            },
        },
    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            style: {
                backgroundColor: '#77948c',
            },
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            size:40,
        }
    }
)



//Drawer navigation mellem animal og social views
const drawerNavigator = createDrawerNavigator(
    {
        Animals: {
            screen: AnimalViewNavigator,
        },

        Social: {
            screen: SocialViewsNavigator,
        }
    },

)



//Switch fra login til app
const switchNavigator = createSwitchNavigator(
      {
          LoginView,
          drawerNavigator
      },

  {
    initialRouteName: 'LoginView'
  }
  )


const AppNavigator = createAppContainer(switchNavigator)

class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AppNavigator />
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

//firebase integration til login funktion
/*
state = {user:null}

    componentDidMount(){
        const fireBaseConfig ={
// Indsat fra min firebase konto
            apiKey: "AIzaSyAEZjV93dHfJPgxwDz215vmVh2dAGW_-dU",
            authDomain: "ovelse5-d8d16.firebaseapp.com",
            databaseURL: "https://ovelse5-d8d16.firebaseio.com",
            projectId: "ovelse5-d8d16",
            storageBucket: "ovelse5-d8d16.appspot.com",
            messagingSenderId: "547045711478",
            appId: "1:547045711478:web:a2a746528961507e7a8957",
            measurementId: "G-C771WBY91M"
        }
        //Initialiserer firebaseBaseConfig
        if (!firebase.apps.length) {
            firebase.initializeApp(fireBaseConfig);
        }


        //validerer brugeren og sætter state til den hentede bruger
        firebase.auth().onAuthStateChanged(user => {
                this.setState({ user });
            });
    }
 */


export default App;


