import React from 'react';
import {SafeAreaView, Platform, Text, View, Dimensions} from 'react-native';
import {Header, Button, Icon} from 'native-base';

export default ({navigation, children, title}) => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'android' ? 0 : -50,
      }}>
      {title ? (
        <Header
          style={{
            height: Platform.OS === 'android' ? 70 : 80,
            backgroundColor: '#31d0cf',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Button transparent iconRight onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'white', marginLeft: 5}} />
            </Button>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginLeft: 10,
              }}>
              {title}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button transparent onPress={() => ''}>
              <Icon name="md-swap" style={{color: 'white'}} />
            </Button>
            <Button transparent onPress={() => ''}>
              <Icon name="md-options" style={{color: 'white'}} />
            </Button>
          </View>
        </Header>
      ) : (
        <></>
      )}
      <View
        style={{
          height: Dimensions.get('window').height - 100,
          position: 'relative',
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

<View
  style={{
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
    <Button transparent iconRight onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" style={{color: 'white', marginLeft: 5}} />
    </Button>
    <Text
      style={{
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
      }}>
      6 Cafe in Baneshwor
    </Text>
  </View>
  <View style={{flexDirection: 'row'}}>
    <Button transparent onPress={() => ''}>
      <Icon name="md-swap" style={{color: 'white'}} />
    </Button>
    <Button transparent onPress={() => ''}>
      <Icon name="md-options" style={{color: 'white'}} />
    </Button>
  </View>
</View>;
