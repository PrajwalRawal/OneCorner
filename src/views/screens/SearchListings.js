import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import {Button, Icon} from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const MealData = ['Breakfast', 'Lunch', 'Dinner', 'Specials'];

const SearchCardData = [
  {
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
];

export default ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#31d0cf',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View style={styles.page}>
        <View style={{backgroundColor: '#31d0cf'}}>
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
                marginBottom: 10,
              }}>
              <Button transparent iconRight onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back"
                  style={{color: 'white', marginLeft: 5}}
                />
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
          </View>
        </View>
        <View style={{margin: 15}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
              color: '#555',
            }}>
            Availability
          </Text>
          <FlatList
            data={MealData}
            style={{marginLeft: -15, marginRight: -15}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#dff5f4',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      color: '#31d0cf',
                      fontSize: 15,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderBottomColor: '#f0f5f5',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 2,
          }}
        />
        <FlatList
          data={SearchCardData}
          style={{marginLeft: -10, marginRight: -10}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  borderBottomColor: '#eaeaea',
                  borderBottomWidth: 1,
                  borderRadius: 5,
                }}
                activeOpacity={0.9}>
                <Image
                  source={require('../../assets/searchImage.jpg')}
                  style={{
                    height: 100,
                    width: 120,
                    resizeMode: 'cover',
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#555',
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{fontSize: 14, color: '#b0a9a9', marginTop: 5}}>
                      $$
                      <Text style={{fontSize: 14, color: '#292828'}}>$$</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#807d7d',
                        marginTop: 5,
                        fontWeight: '500',
                      }}>
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#807d7d',
                        marginTop: 5,
                        fontWeight: '500',
                      }}>
                      {item.address}
                    </Text>
                  </View>
                </View>
                <View style={{marginRight: 30}}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: '#58d69b',
                    }}>
                    5.2<Text style={{fontSize: 16}}>/6</Text>
                  </Text>
                  <Text
                    style={{
                      color: '#807d7d',
                    }}>
                    59 Reviews
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
});
