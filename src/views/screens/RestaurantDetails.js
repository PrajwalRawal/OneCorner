import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  Dimensions,
  Platform,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import ReadMore from 'react-native-read-more-text';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import Table from 'react-native-simple-table';
// import MapView from 'react-native-maps';

const DetailView = ({navigation}) => {
  const images = [
    require('../../assets/cardImage.jpg'),
    require('../../assets/cardImage.jpg'),
    require('../../assets/cardImage.jpg'),
    require('../../assets/cardImage.jpg'),
    require('../../assets/cardImage.jpg'),
  ];

  const ReviewData = [
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
  ];

  const column1 = [
    {
      title: 'Day',
      dataIndex: 'day',
      width: 150,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      width: 250,
    },
  ];

  const column2 = [
    {
      title: 'Date',
      dataIndex: 'date',
      width: 150,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      width: 60,
    },
    {
      title: 'Event Name',
      dataIndex: 'eventName',
      width: 150,
    },
  ];

  const dataSource = [
    {day: 'Open today', time: 'Opens at 6:00 pm'},
    {day: 'Wednesday', time: '6:00 pm - 2:00 am'},
    {day: 'Thursday', time: '12:00 pm  2:00 am'},
    {day: 'Friday', time: 'Closed'},
    {day: 'Saturday', time: '6:00 pm - 2:00 am'},
    {day: 'Sunday', time: 'Closed'},
  ];

  const Specials = [
    {date: '15 Dec 2020', time: '6:00 pm', eventName: 'Good Friday'},
    {date: '25 Dec 2020', time: '5:00 pm', eventName: 'Christmas Offers'},
    {date: '15 Dec 2020', time: '6:00 pm', eventName: 'Good Friday'},
    {date: '25 Dec 2020', time: '5:00 pm', eventName: 'Christmas Offers'},
    {date: '15 Dec 2020', time: '6:00 pm', eventName: 'Good Friday'},
    {date: '25 Dec 2020', time: '5:00 pm', eventName: 'Christmas Offers'},
  ];

  const [showAbout, setShowAbout] = useState(true);
  const [showSpecial, setShowSpecial] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowSpecial(false);
    setShowReviews(false);
    setShowPhotos(false);
  };

  const handleSpecialClick = () => {
    setShowSpecial(true);
    setShowAbout(false);
    setShowReviews(false);
    setShowPhotos(false);
  };
  const handleReviewsClick = () => {
    setShowReviews(true);
    setShowAbout(false);
    setShowSpecial(false);
    setShowPhotos(false);
  };
  const handlePhotosClick = () => {
    setShowPhotos(true);
    setShowAbout(false);
    setShowSpecial(false);
    setShowReviews(false);
  };

  const handleTextReady = () => {};

  const handleReadMore = handlePress => {
    return (
      <Text
        style={{
          color: '#31d0cf',
          marginTop: 15,
          textAlign: 'right',
          fontSize: 14,
        }}
        onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const handleShowLess = handlePress => {
    return (
      <Text
        style={{
          color: '#31d0cf',
          marginTop: 15,
          textAlign: 'right',
          fontSize: 14,
        }}
        onPress={handlePress}>
        Show less
      </Text>
    );
  };

  const [display, setDisplay] = useState(false);
  const {width} = Dimensions.get('screen');

  return (
    <MainLayout title="Chicken Station" navigation={navigation}>
      <ScrollView stickyHeaderIndices={[2]}>
        <Image
          source={require('../../assets/cardImage.png')}
          style={{
            width: Dimensions.get('screen').width,
            height: 270,
            resizeMode: 'cover',
            backgroundColor: 'white',
          }}
        />
        <View style={{backgroundColor: 'white'}}>
          <View style={{margin: 20}}>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/restaurantLogo.png')}
                style={{height: 80, width: 80}}
              />
              <View style={{marginLeft: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Chicken Station
                  </Text>
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      borderRadius: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#dff5f4',
                    }}>
                    <Text style={{color: '#31d0cf', fontWeight: 'bold'}}>
                      3
                    </Text>
                    <Icon
                      name="star"
                      size={15}
                      color="#ffd75e"
                      style={{marginLeft: 2, marginTop: 1}}
                    />
                  </View>
                </View>
                <Text style={{color: '#555', marginTop: 2}}>
                  Restaurant |{' '}
                  <Text style={{color: 'black'}}>
                    $$<Text style={{color: '#555'}}>$$</Text>
                  </Text>
                </Text>
                <Text style={{color: '#555', marginTop: 2}}>
                  Open now - Closes at 21:00
                </Text>
                <Text style={{color: '#555', marginTop: 2}}>New Baneshwor</Text>
                <Text style={{color: '#555', marginTop: 2}}>
                  Kathmandu, Nepal
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderTopWidth: 1,
              borderTopColor: '#eaeaea',
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: showAbout ? '#31d0cf' : 'transparent',
                borderBottomWidth: 3,
                padding: 15,
              }}
              activeOpacity={0.9}
              onPress={() => handleAboutClick()}>
              <Text style={{color: showAbout ? '#31d0cf' : '#aba7a7'}}>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: showSpecial ? '#31d0cf' : 'transparent',
                borderBottomWidth: 3,
                padding: 15,
              }}
              activeOpacity={0.9}
              onPress={() => handleSpecialClick()}>
              <Text style={{color: showSpecial ? '#31d0cf' : '#aba7a7'}}>
                Special
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: showReviews ? '#31d0cf' : 'transparent',
                borderBottomWidth: 3,
                padding: 15,
              }}
              activeOpacity={0.9}
              onPress={() => handleReviewsClick()}>
              <Text style={{color: showReviews ? '#31d0cf' : '#aba7a7'}}>
                Reviews
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: showPhotos ? '#31d0cf' : 'transparent',
                borderBottomWidth: 3,
                padding: 15,
              }}
              activeOpacity={0.9}
              onPress={() => handlePhotosClick()}>
              <Text style={{color: showPhotos ? '#31d0cf' : '#aba7a7'}}>
                Photos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          {showAbout ? (
            <View
              style={{
                margin: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: 15,
                }}>
                About Chicken Station
              </Text>
              <ReadMore
                numberOfLines={4}
                onReady={handleTextReady}
                renderTruncatedFooter={handleReadMore}
                renderRevealedFooter={handleShowLess}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like). Where does it come from? Contrary to
                  popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words.
                </Text>
              </ReadMore>
            </View>
          ) : (
            <></>
          )}
          {showReviews ? (
            <View style={{margin: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: 15,
                }}>
                Reviews
              </Text>
              <View style={{backgroundColor: 'white'}}>
                <View
                  style={{
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <Image
                    style={{height: 60, width: 60, resizeMode: 'cover'}}
                    source={require('../../assets/emoji.png')}
                  />
                  <Stars
                    default={4.5}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={<Icon name={'star'} size={30} color="#31d0cf" />}
                    emptyStar={<Icon name={'star'} size={30} color="#555" />}
                    halfStar={
                      <Icon name={'star-half'} size={30} color="#31d0cf" />
                    }
                  />
                  <Text
                    style={{fontSize: 16, color: '#555', fontWeight: 'bold'}}>
                    Excellent
                  </Text>
                </View>
                <View style={{margin: 20}}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#555',
                      marginTop: 10,
                      marginBottom: 10,
                      fontWeight: 'bold',
                    }}>
                    Ratings
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <ProgressBar
                      backgroundBarStyle={{
                        width: 150,
                        height: 18,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginBottom: 10,
                      }}
                      textStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 8,
                        marginTop: 3,
                      }}
                      arrayOfProgressObjects={[
                        {
                          color: '#04a745',
                          value: 0.7,
                          nameToDisplay: '70%',
                        },
                      ]}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#555',
                        fontWeight: 'bold',
                      }}>
                      Noise Levels
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ProgressBar
                      backgroundBarStyle={{
                        width: 150,
                        height: 18,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginBottom: 10,
                      }}
                      textStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 8,
                        marginTop: 3,
                      }}
                      arrayOfProgressObjects={[
                        {
                          color: '#1feb1f',
                          value: 0.55,
                          nameToDisplay: '50%',
                        },
                      ]}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#555',
                        fontWeight: 'bold',
                      }}>
                      Value For Money
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ProgressBar
                      backgroundBarStyle={{
                        width: 150,
                        height: 18,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginBottom: 10,
                      }}
                      textStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 8,
                        marginTop: 3,
                      }}
                      arrayOfProgressObjects={[
                        {
                          color: '#7ee635',
                          value: 0.85,
                          nameToDisplay: '85%',
                        },
                      ]}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#555',
                        fontWeight: 'bold',
                      }}>
                      Atmosphere
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ProgressBar
                      backgroundBarStyle={{
                        width: 150,
                        height: 18,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginBottom: 10,
                      }}
                      textStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 8,
                        marginTop: 3,
                      }}
                      arrayOfProgressObjects={[
                        {
                          color: '#ddc50a',
                          value: 0.6,
                          nameToDisplay: '60%',
                        },
                      ]}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#555',
                        fontWeight: 'bold',
                      }}>
                      Food
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ProgressBar
                      backgroundBarStyle={{
                        width: 150,
                        height: 18,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginBottom: 10,
                      }}
                      textStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 8,
                        marginTop: 3,
                      }}
                      arrayOfProgressObjects={[
                        {
                          color: '#fbba08',
                          value: 0.95,
                          nameToDisplay: '95%',
                        },
                      ]}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#555',
                        fontWeight: 'bold',
                      }}>
                      Service
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ProgressBar
                      backgroundBarStyle={{
                        width: 150,
                        height: 18,
                        borderColor: 'black',
                        borderWidth: 1,
                      }}
                      textStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 8,
                        marginTop: 3,
                      }}
                      arrayOfProgressObjects={[
                        {
                          color: '#f87f0d',
                          value: 0.75,
                          nameToDisplay: '75%',
                        },
                      ]}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#555',
                        fontWeight: 'bold',
                      }}>
                      Music
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'right',
                      color: '#31d0cf',
                    }}
                    onPress={() => setDisplay(true)}>
                    Show all
                  </Text>
                </View>
                <FlatList
                  data={ReviewData}
                  style={{marginLeft: -15, marginRight: -15}}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={{
                          marginLeft: 20,
                          marginRight: 20,
                          borderTopWidth: 1,
                          borderTopColor: '#eaeaea',
                          paddingTop: 20,
                          paddingBottom: 20,
                        }}
                        activeOpacity={0.5}
                        onPress={() => setDisplay(true)}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <View
                              style={{
                                height: 40,
                                width: 40,
                                borderRadius: 60,
                                backgroundColor: '#31d0cf',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={{fontSize: 16, color: 'white'}}>
                                {item.initials}
                              </Text>
                            </View>
                            <View style={{marginLeft: 10}}>
                              <Text style={{fontWeight: 'bold'}}>
                                {item.name}
                              </Text>
                              <Text>
                                {item.time} ago | {item.numberOfReviews} Reviews
                              </Text>
                            </View>
                          </View>
                          <Text
                            style={{
                              fontSize: 24,
                              fontWeight: 'bold',
                              color: '#58d69b',
                            }}>
                            {item.rating}
                            <Text style={{fontSize: 14}}>/5</Text>
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginTop: 10,
                            lineHeight: 18,
                            color: '#555',
                          }}>
                          {item.description}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
                <DisplayModal
                  display={display}
                  setDisplay={setDisplay}
                  navigation={navigation}
                />
              </View>
            </View>
          ) : (
            <></>
          )}
          {showPhotos ? (
            <View style={{margin: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: 15,
                }}>
                Photos
              </Text>
              <View style={{backgroundColor: 'white'}}>
                <View
                  style={{
                    // flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}>
                  {images.map(q => {
                    return (
                      <Image
                        key={q.image}
                        source={require('../../assets/cardImage.jpg')}
                        style={{
                          width: Dimensions.get('screen').width / 2.3,
                          height: 150,
                          resizeMode: 'cover',
                          marginBottom: 15,
                        }}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
          {showSpecial ? (
            <View style={{margin: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: 15,
                }}>
                Specials
              </Text>
              <Table height={180} columns={column2} dataSource={Specials} />
            </View>
          ) : (
            <></>
          )}
          <View
            style={{
              margin: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Icon name="map" size={25} color="#555" />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#555',
                  marginLeft: 10,
                }}>
                Map
              </Text>
            </View>
            <Image
              source={require('../../assets/maps.png')}
              style={{
                height: 250,
                width: Dimensions.get('screen').width - 45,
                resizeMode: 'cover',
              }}
            />
            <View
              style={{
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Icon name="clock-outline" size={25} color="#555" />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#555',
                    marginLeft: 10,
                  }}>
                  Opening Hours
                </Text>
              </View>
              <Table height={180} columns={column1} dataSource={dataSource} />
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Icon name="map-marker-radius" size={25} color="#555" />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#555',
                    marginLeft: 10,
                  }}>
                  Address
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  paddingBottom: 30,
                  paddingTop: 30,
                  borderColor: '#eaeaea',
                  alignItems: 'center',
                }}>
                <Text style={{marginBottom: 5}}>PIPAL BOT MARG</Text>
                <Text style={{marginBottom: 5}}>KATHMANDU 44600</Text>
                <Text style={{marginBottom: 5}}>NEPAL</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 100,
          position: 'absolute',
          left: 0,
          bottom: -15,
          alignItems: 'center',
          width,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#31d0cf',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.9}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Reserve Now
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const DisplayModal = ({display, setDisplay, navigation}) => {
  const ReviewData = [
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
    {
      initials: 'A',
      name: 'Alex C',
      time: '2 months',
      numberOfReviews: '2',
      rating: '5',
      description:
        'Great night, great service food and drinks, definitely be back again.',
    },
  ];
  return (
    <Modal
      visible={display}
      animationType="slide"
      presentationStyle="fullScreen">
      <View style={{marginTop: Platform.OS === 'android' ? -35 : 0}}>
        <MainLayout title="Chicken Station" navigation={navigation}>
          <ScrollView>
            <View
              style={{
                padding: 20,
                backgroundColor: '#f0f5f5',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>Reviews</Text>
              <View>
                <Text
                  style={{fontSize: 18, color: '#58d69b', fontWeight: 'bold'}}>
                  Great
                </Text>
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
            </View>
            <View style={{margin: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{color: '#adaaaa', fontWeight: 'bold'}}>
                  Noise levels:
                </Text>
                <Text>Good</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{color: '#adaaaa', fontWeight: 'bold'}}>
                  Value for money:
                </Text>
                <Text>Average value</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{color: '#adaaaa', fontWeight: 'bold'}}>
                  Atmosphere:
                </Text>
                <Text>Pleasant</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{color: '#adaaaa', fontWeight: 'bold'}}>
                  Food:
                </Text>
                <Text>Average</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{color: '#adaaaa', fontWeight: 'bold'}}>
                  Service:
                </Text>
                <Text>Great</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{color: '#adaaaa', fontWeight: 'bold'}}>
                  Music:
                </Text>
                <Text>Good</Text>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: '#eaeaea',
                // borderBottomColor: '#eaeaea',
                // borderBottomWidth: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 20,
                  alignItems: 'center',
                }}>
                <Icon name="chevron-down" size={15} color="#555" />
                <Text
                  style={{
                    marginRight: 30,
                    marginLeft: 5,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#555',
                  }}>
                  Rating
                </Text>
                <Icon name="chevron-down" size={15} color="#555" />
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#555',
                  }}>
                  Time
                </Text>
              </View>
            </View>
            <View style={{marginBottom: 200}}>
              <FlatList
                data={ReviewData}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        // marginLeft: 20,
                        // marginRight: 20,
                        borderTopWidth: 1,
                        borderTopColor: '#eaeaea',
                        paddingTop: 20,
                        paddingBottom: 20,
                      }}
                      activeOpacity={0.5}
                      onPress={() => setDisplay(true)}>
                      <View style={{marginLeft: 20, marginRight: 20}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <View
                              style={{
                                height: 40,
                                width: 40,
                                borderRadius: 60,
                                backgroundColor: '#31d0cf',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={{fontSize: 16, color: 'white'}}>
                                {item.initials}
                              </Text>
                            </View>
                            <View style={{marginLeft: 10}}>
                              <Text style={{fontWeight: 'bold'}}>
                                {item.name}
                              </Text>
                              <Text>
                                {item.time} ago | {item.numberOfReviews} Reviews
                              </Text>
                            </View>
                          </View>
                          <Text
                            style={{
                              fontSize: 24,
                              fontWeight: 'bold',
                              color: '#58d69b',
                            }}>
                            {item.rating}
                            <Text style={{fontSize: 14}}>/5</Text>
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginTop: 10,
                            lineHeight: 18,
                            color: '#555',
                          }}>
                          {item.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </MainLayout>
      </View>
    </Modal>
  );
};

DetailView.navigationOptions = {
  title: 'Hello',
};

export default DetailView;
