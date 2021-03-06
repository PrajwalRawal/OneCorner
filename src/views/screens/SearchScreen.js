import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SectionList,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';
import {Button, Icon} from 'native-base';

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
        city: 'Baneshwor',
        country: 'Nepal',
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
  const [location, setLocation] = useState('London');
  const [cuisine, setCuisine] = useState('');

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
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'android' ? 0 : -50,
      }}>
      <View style={styles.page}>
        <View
          style={{
            backgroundColor: '#31d0cf',
            paddingTop: Platform.OS === 'ios' ? 30 : 0,
          }}>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              paddingTop: Platform.OS === 'android' ? 30 : 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Button transparent iconRight onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" style={{color: 'white'}} />
              </Button>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Search
              </Text>
            </View>
            <View
              style={{
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#cccecf',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                paddingTop: 5,
                marginBottom: 15,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 14, color: '#bbbcbf', marginBottom: 5}}>
                  Where?
                </Text>
                <TextInput
                  onChangeText={data => setLocation(data)}
                  value={location}
                  autoCompleteType="off"
                  autoCapitalize="none"
                  returnKeyType="search"
                  clearTextOnFocus={true}
                  onSubmitEditing={() =>
                    navigation.navigate('Search', {
                      screen: 'SearchListings',
                    })
                  }
                  onFocus={() => handleLocation()}
                  style={{
                    fontSize: 16,
                    width: 320,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#cccecf',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                paddingTop: 5,
                marginBottom: 15,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 14, color: '#bbbcbf', marginBottom: 5}}>
                  What're you looking for?
                </Text>
                <TextInput
                  onChangeText={data => setCuisine(data)}
                  value={cuisine}
                  autoCompleteType="off"
                  autoCapitalize="none"
                  returnKeyType="search"
                  autoFocus={true}
                  onSubmitEditing={() =>
                    navigation.navigate('Search', {
                      screen: 'SearchListings',
                    })
                  }
                  onFocus={() => handleCuisine()}
                  style={{
                    fontSize: 16,
                    width: 320,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {showCuisine ? (
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
            <View style={{marginBottom: 500}}>
              <View
                style={{
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <IconA name="isv" size={25} color="#31d0cf" />
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
              <View style={{marginTop: 30}}>
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
                  scrollEnabled={false}
                  style={{marginBottom: 300}}
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
            </View>
          </View>
        ) : (
          <></>
        )}
        {showLocation ? (
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
            <View style={{marginBottom: 500}}>
              <View
                style={{
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <IconA name="find" size={25} color="#31d0cf" />
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
              <View style={{marginTop: 30}}>
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
                  scrollEnabled={false}
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
                        <IconA name="enviromento" size={30} color="#555" />
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
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
});
