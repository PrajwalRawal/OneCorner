import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';

export default ({navigation}) => {
  const CravingsData = [
    {
      title: 'Burger',
      icon: 'hamburger',
    },
    {
      title: 'Pizza',
      icon: 'pizza',
    },
    {
      title: 'Sausage',
      icon: 'sausage',
    },
    {
      title: 'Rice',
      icon: 'rice',
    },
    {
      title: 'Fish',
      icon: 'fish',
    },
    {
      title: 'Drinks',
      icon: 'food',
    },
  ];

  const FeaturedData = [
    {
      id: 1,
      title: 'Chicken Station',
      address: 'Kathmandu, New Baneshwor',
      type: 'Restaurant',
    },
    {
      id: 2,
      title: 'Chicken Station',
      address: 'Kathmandu, New Baneshwor',
      type: 'Restaurant',
    },
    {
      id: 3,
      title: 'Chicken Station',
      address: 'Kathmandu, New Baneshwor',
      type: 'Restaurant',
    },
    {
      id: 4,
      title: 'Chicken Station',
      address: 'Kathmandu, New Baneshwor',
      type: 'Restaurant',
    },
    {
      id: 5,
      title: 'Chicken Station',
      address: 'Kathmandu, New Baneshwor',
      type: 'Restaurant',
    },
  ];

  return (
    <MainLayout navigation={navigation}>
      <ScrollView>
        <View style={{marginBottom: 10, backgroundColor: 'white'}}>
          <View
            style={{
              padding: 15,
              backgroundColor: '#f0f5f5',
            }}>
            <Text style={{fontSize: 26, fontWeight: 'bold', marginBottom: 10}}>
              Hello Vesper!
            </Text>
            <Text style={{fontSize: 16, color: '#292828'}}>
              Not sure where to start? You can complete your profile.
            </Text>
            <View
              style={{
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              }}>
              <Icon name="feature-search-outline" size={30} color="#31d0cf" />
              <Text style={{fontSize: 16, marginLeft: 10, color: '#555'}}>
                Search For Restaurants
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20, marginLeft: 15}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                marginBottom: 15,
              }}>
              What are you craving ?
            </Text>
            <FlatList
              style={{marginLeft: -15, paddingLeft: 15}}
              data={CravingsData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.title}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      marginRight: 30,
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#dff5f4',
                        borderRadius: 80,
                        width: 60,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon name={item.icon} color="#31d0cf" size={40} />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#555',
                        fontSize: 12,
                        marginTop: 10,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={{marginTop: 20, marginLeft: 15, marginBottom: 15}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                marginBottom: 15,
              }}>
              Featured Restaurants
            </Text>
            <FlatList
              style={{
                marginLeft: -15,
                paddingLeft: 15,
              }}
              data={FeaturedData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.title}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{marginRight: 10}}>
                    <View style={styles.featuredImageWrapper}>
                      <Image
                        source={require('../../assets/cardImage.jpg')}
                        style={styles.featuredThumbnail}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          backgroundColor: 'rgba(192,192,192,1)',
                          borderRadius: 10,
                          padding: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            marginRight: 5,
                            color: 'black',
                          }}>
                          4.5
                        </Text>
                        <Icon name="star" size={15} color="#ffd75e" />
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'rgba(0,255,255,0.9)',
                          borderRadius: 10,
                          padding: 5,
                        }}>
                        <Text
                          style={{
                            color: '#292828',
                            fontWeight: '500',
                            fontSize: 12,
                          }}>
                          RESERVE
                        </Text>
                      </View>
                    </View>
                    <View style={{justifyContent: 'flex-start', marginTop: 10}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#dff5f4',
                            padding: 5,
                            borderRadius: 5,
                            marginRight: 10,
                          }}>
                          <Text
                            style={{
                              color: '#31d0cf',
                              fontWeight: '500',
                              fontSize: 12,
                            }}>
                            NEW
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#292828',
                          }}>
                          {item.title}
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: 14,
                          color: '#292828',
                        }}>
                        {item.address} &bull;{' '}
                        <Text style={{fontSize: 14, color: '#292828'}}>
                          {item.type}
                        </Text>
                      </Text>
                      <Text
                        style={{fontSize: 14, color: '#b0a9a9', marginTop: 5}}>
                        $$
                        <Text style={{fontSize: 14, color: '#292828'}}>$$</Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{marginLeft: 15, borderWidth: 0.5, borderColor: '#e0dada'}}
          />
          <View style={{marginTop: 20, marginLeft: 15, marginBottom: 15}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                marginBottom: 15,
              }}>
              Popular Near You
            </Text>
            <FlatList
              style={{
                marginLeft: -15,
                paddingLeft: 15,
              }}
              data={FeaturedData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{marginRight: 10}}>
                    <View style={styles.featuredImageWrapper}>
                      <Image
                        source={require('../../assets/cardImage.jpg')}
                        style={styles.featuredThumbnail}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          backgroundColor: 'rgba(192,192,192,1)',
                          borderRadius: 10,
                          padding: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            marginRight: 5,
                            color: 'black',
                          }}>
                          4.5
                        </Text>
                        <Icon name="star" size={15} color="#ffd75e" />
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'rgba(0,255,255,0.9)',
                          borderRadius: 10,
                          padding: 5,
                        }}>
                        <Text
                          style={{
                            color: '#292828',
                            fontWeight: '500',
                            fontSize: 12,
                          }}>
                          RESERVE
                        </Text>
                      </View>
                    </View>
                    <View style={{justifyContent: 'flex-start', marginTop: 10}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#dff5f4',
                            padding: 5,
                            borderRadius: 5,
                            marginRight: 10,
                          }}>
                          <Text
                            style={{
                              color: '#31d0cf',
                              fontWeight: '500',
                              fontSize: 12,
                            }}>
                            NEW
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#292828',
                          }}>
                          {item.title}
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: 14,
                          color: '#292828',
                        }}>
                        {item.address} &bull;{' '}
                        <Text style={{fontSize: 14, color: '#292828'}}>
                          {item.type}
                        </Text>
                      </Text>
                      <Text
                        style={{fontSize: 14, color: '#b0a9a9', marginTop: 5}}>
                        $$
                        <Text style={{fontSize: 14, color: '#292828'}}>$$</Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{marginLeft: 15, borderWidth: 0.5, borderColor: '#e0dada'}}
          />
          <View style={{marginTop: 20, marginLeft: 15, marginBottom: 15}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                marginBottom: 15,
              }}>
              Trending Now
            </Text>
            <FlatList
              style={{
                marginLeft: -15,
                paddingLeft: 15,
              }}
              data={FeaturedData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{marginRight: 10}}>
                    <View style={styles.trendingImageWrapper}>
                      <Image
                        source={require('../../assets/trendingNow.jpg')}
                        style={styles.trendingThumbnail}
                      />
                      <LinearGradient
                        colors={[
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0)',
                        ]}
                        style={styles.trendingNowTextBox}>
                        <Text
                          style={{
                            ...styles.trendingNowText,
                            fontWeight: 'bold',
                          }}>
                          Trending now
                        </Text>
                        <Text style={styles.trendingNowText}>
                          Special Offers
                        </Text>
                      </LinearGradient>
                      <LinearGradient
                        colors={[
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0)',
                        ]}
                        style={styles.trendingSeeMoreBox}>
                        <Text
                          style={{
                            ...styles.trendingSeeMoreText,
                            fontWeight: 'bold',
                          }}>
                          See More
                        </Text>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  featuredImageWrapper: {
    position: 'relative',
    height: 150,
    width: 350,
  },
  featuredThumbnail: {
    height: 150,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  trendingImageWrapper: {
    position: 'relative',
    height: 250,
    width: 350,
  },
  trendingThumbnail: {
    height: 250,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  trendingNowTextBox: {
    position: 'absolute',
    bottom: 5,
    left: 10,
  },
  trendingNowText: {
    color: 'white',
  },
  trendingSeeMoreBox: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  trendingSeeMoreText: {
    color: 'white',
    fontSize: 16,
  },
});
