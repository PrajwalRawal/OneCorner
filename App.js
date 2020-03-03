import * as React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';

//Screens
import HomeScreen from './src/views/screens/HomeScreen';
import Notifications from './src/views/screens/Notifications';
import SearchListings from './src/views/screens/SearchListings';
import SearchScreen from './src/views/screens/SearchScreen';
import RestaurantDetails from './src/views/screens/RestaurantDetails';

let routes = [
  {
    name: 'Home',
    component: Home,
    options: {
      drawerIcon: () => (
        <Icon name="home" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'Profile',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon name="user" size={25} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'Reservations',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon name="carryout" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'Reviews',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon name="form" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'Loyalty Points',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon name="staro" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'About',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon name="info" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'FAQ',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon
          name="questioncircleo"
          size={20}
          style={{width: 20}}
          color="#555"
        />
      ),
    },
  },
  {
    name: 'Are You a Restaurant ?',
    component: Notifications,
    options: {
      drawerIcon: () => (
        <Icon name="isv" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
  {
    name: 'Search',
    component: Search,
    options: {
      drawerIcon: () => (
        <Icon name="isv" size={20} style={{width: 20}} color="#555" />
      ),
    },
  },
];

function CustomDrawerContent({...rest}) {
  return (
    <DrawerContentScrollView canCancelContentTouches={true} {...rest}>
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Image
          source={{
            uri:
              'https://vignette.wikia.nocookie.net/jamesbond/images/c/ca/Vesper_Lynd_%28Eva_Green%29_-_Profile.png',
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            resizeMode: 'cover',
          }}
        />
        <View style={{marginLeft: 15, alignItems: 'center'}}>
          <Text style={{color: '#555', fontSize: 16}}>Vesper Lynd</Text>
          <View
            style={{
              alignItems: 'center',
              marginTop: 5,
              borderWidth: 1,
              borderColor: '#31d0cf',
              borderRadius: 5,
              padding: 5,
            }}>
            <Text style={{color: '#555'}}>400 Points</Text>
          </View>
        </View>
      </View>
      <View
        style={{borderWidth: 0.5, borderColor: '#eaeaea', marginBottom: 5}}
      />

      <DrawerItemList {...rest} />

      <View style={{borderWidth: 0.5, borderColor: '#eaeaea'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Icon name="setting" size={25} color="#555" />
        <Text
          style={{
            color: '#555',
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 20,
          }}>
          Settings
        </Text>
      </View>
      <View style={{borderWidth: 0.5, borderColor: '#eaeaea'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Icon name="customerservice" size={25} color="#555" />
        <Text
          style={{
            color: '#555',
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 20,
          }}>
          Contact Us
        </Text>
      </View>
      <View style={{borderWidth: 0.5, borderColor: '#eaeaea'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Icon name="poweroff" size={25} color="#555" />
        <Text
          style={{
            color: '#555',
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 20,
          }}>
          Log Out
        </Text>
      </View>
      <View style={{borderWidth: 0.5, borderColor: '#eaeaea'}} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
}

function Search() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchListings" component={SearchListings} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerStyle={{
          backgroundColor: 'white',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          marginTop: StatusBar.currentHeight,
        }}
        drawerContentOptions={{
          marginTop: 10,
          labelStyle: {
            color: '#555',
            fontSize: 14,
            marginLeft: -10,
          },
          activeBackgroundColor: '#dff5f4',
        }}
        drawerContent={props => CustomDrawerContent(props)}>
        {routes.map((route, i) => (
          <Drawer.Screen key={i} {...route} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
