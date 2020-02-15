import React from 'react';
import {StatusBar, SafeAreaView, Platform, Text} from 'react-native';
import SearchBar from '../partials/SearchBar';
import {Header, Button, Icon} from 'native-base';

export default ({navigation, children, title}) => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : -50,
        marginBottom: Platform.OS === 'ios' ? -50 : 25,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {!title ? (
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
        <Header
          style={{
            height: 80,
            backgroundColor: '#31d0cf',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Button transparent iconRight onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={{color: 'white'}} />
          </Button>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              marginLeft: 10,
            }}>
            {title}
          </Text>
        </Header>
      )}
      {children}
    </SafeAreaView>
  );
};
