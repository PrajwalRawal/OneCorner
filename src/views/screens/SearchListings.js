import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchLayout from '../layouts/SearchLayout';

const MealData = ['Breakfast', 'Lunch', 'Dinner', 'Specials'];

const SearchCardData = [
  {
    id: 1,
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    id: 2,
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    id: 3,
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    id: 4,
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    id: 5,
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
  {
    id: 6,
    title: 'Redmud Coffee',
    type: 'Cafe',
    address: 'Baneshwor',
  },
];

export default ({navigation}) => {
  const {width} = Dimensions.get('screen');
  return (
    <SearchLayout title="6 Cafe in Baneshwor" navigation={navigation}>
      <ScrollView>
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
          keyExtractor={item => item.id.toString()}
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
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('Home', {
                    screen: 'RestaurantDetails',
                  })
                }>
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
                      style={{
                        fontSize: 14,
                        color: '#b0a9a9',
                        marginTop: 5,
                      }}>
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
                    4.2<Text style={{fontSize: 16}}>/5</Text>
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
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 20,
          alignItems: 'center',
          width,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#31d0cf',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.9}>
          <IconM
            name="map-outline"
            size={30}
            color="white"
            style={{paddingRight: 10}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            See Map
          </Text>
        </TouchableOpacity>
      </View>
    </SearchLayout>
  );
};
