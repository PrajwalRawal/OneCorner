import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import SearchBar from '../partials/SearchBar';
import {Container, Header, Content} from 'native-base';
import mainStyle from '../../styles/mainStyle';

export default ({navigation, children, noHeader}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : -50,
        marginBottom: Platform.OS === 'ios' ? -50 : 25,
      }}>
      <StatusBar translucent barStyle="light-content" />
      {!noHeader ? (
        <Header
          style={{
            height: 80,
            borderBottomColor: 'white',
            backgroundColor: '#31d0cf',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SearchBar navigation={navigation} />
        </Header>
      ) : (
        <></>
      )}
      {children}
    </SafeAreaView>
  );
};
