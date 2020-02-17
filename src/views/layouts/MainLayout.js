import React from 'react';
import {
  SafeAreaView,
  Platform,
  Text,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import SearchBar from '../partials/SearchBar';
import {Header, Button, Icon} from 'native-base';

export default ({navigation, children, title, scrollview}) => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'android' ? 0 : -50,
        marginBottom: Platform.OS === 'ios' ? 60 : 0,
      }}>
      {!title ? (
        <Header
          style={{
            height: 100,
            borderBottomColor: 'white',
            backgroundColor: '#31d0cf',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: Platform.OS === 'android' ? 30 : 20,
          }}>
          <SearchBar navigation={navigation} />
        </Header>
      ) : (
        <Header
          style={{
            height: Platform.OS === 'android' ? 70 : 80,
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
      {scrollview ? (
        <ScrollView
          style={{
            height: Dimensions.get('window').height - 100,
          }}>
          {children}
        </ScrollView>
      ) : (
        <View
          style={{
            height: Dimensions.get('window').height - 100,
            position: 'relative',
          }}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};
