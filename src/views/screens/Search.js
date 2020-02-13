import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SectionList,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CuisineSections = [
  {
    data: [
      {
        title: 'Italian',
        icon: 'rest',
        screen: 'Italian',
      },
      {
        title: 'Asian',
        icon: 'rest',
        screen: 'Asian',
      },
      {
        title: 'German',
        icon: 'rest',
        screen: 'German',
      },
      {
        title: 'International',
        icon: 'rest',
        screen: 'International',
      },
      {
        title: 'Indian',
        icon: 'rest',
        screen: 'Indian',
      },
    ],
  },
];

const LocationSections = [
  {
    data: [
      {
        city: 'Berlin',
        country: 'Germany',
      },
      {
        city: 'London',
        country: 'United Kingdom',
      },
      {
        city: 'Rome',
        country: 'Italy',
      },
      {
        city: 'Singapore',
        country: 'Singapore',
      },
      {
        city: 'Sydney',
        country: 'Australia',
      },
    ],
  },
];

export default ({navigation}) => {
  const [showCuisine, setShowCuisine] = useState(true);
  const [showLocation, setShowLocation] = useState(false);

  const handleCuisine = () => {
    setShowCuisine(true);
    setShowLocation(false);
  };

  const handleLocation = () => {
    setShowLocation(true);
    setShowCuisine(false);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.page}>
        <View
          style={{
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Icon
              name="arrowleft"
              size={30}
              style={{marginBottom: 10, marginRight: 10}}
              color="#555"
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                height: 50,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#cccecf',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingLeft: 10,
                marginBottom: 15,
              }}>
              <TouchableOpacity activeOpacity={0.9}>
                <Icon name="search1" size={25} color="#555" />
              </TouchableOpacity>
              <TextInput
                onFocus={() => handleCuisine()}
                placeholder="Search for a restaurant or a cuisine"
                placeholderTextColor="#bbbcbf"
                selectionColor="#6373db"
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 40,
              height: 50,
              width: Dimensions.get('screen').width - 80,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#cccecf',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingLeft: 10,
              marginBottom: 15,
            }}>
            <TouchableOpacity activeOpacity={0.9}>
              <Icon name="enviromento" size={25} color="#555" />
            </TouchableOpacity>
            <TextInput
              onFocus={() => handleLocation()}
              placeholder="Search by location"
              placeholderTextColor="#bbbcbf"
              selectionColor="#6373db"
              style={{
                marginLeft: 10,
                fontSize: 16,
              }}
            />
          </View>
          <View
            style={{
              marginLeft: -20,
              marginRight: -20,
              borderWidth: 0.5,
              borderColor: '#e0dada',
            }}
          />
          {showCuisine ? (
            <ScrollView>
              <View
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <Icon name="isv" size={25} color="#31d0cf" />
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 15,
                    color: '#31d0cf',
                    fontWeight: 'bold',
                  }}>
                  SEE ALL RESTAURANTS
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#bbbcbf',
                    marginBottom: 20,
                  }}>
                  TOP CUISINE
                </Text>
                <SectionList
                  sections={CuisineSections}
                  keyExtractor={(_, i) => i.toString()}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                          marginBottom: 15,
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}
                        onPress={() => ''}>
                        <Image
                          style={{
                            height: 40,
                            width: 40,
                          }}
                          source={require('../../assets/cuisine.png')}
                          //   size={50}
                        />
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 16,
                            marginTop: 5,
                            fontWeight: '300',
                          }}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </ScrollView>
          ) : (
            <></>
          )}
          {showLocation ? (
            <ScrollView>
              <View
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <Icon name="find" size={25} color="#31d0cf" />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#31d0cf',
                    fontWeight: 'bold',
                  }}>
                  NEAR ME
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#bbbcbf',
                    marginBottom: 20,
                  }}>
                  TOP CITIES
                </Text>
                <SectionList
                  sections={LocationSections}
                  keyExtractor={(_, i) => i.toString()}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                          marginBottom: 20,
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}
                        onPress={() => ''}>
                        <Icon name="enviromento" size={30} color="#555" />
                        <Text
                          style={{
                            marginLeft: 10,
                            marginBottom: 5,
                            fontSize: 16,
                            fontWeight: '300',
                          }}>
                          {item.city}{' '}
                          <Text
                            style={{
                              fontSize: 14,
                              color: '#555',
                              fontWeight: '300',
                            }}>
                            {item.country}
                          </Text>
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </ScrollView>
          ) : (
            <></>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
});
