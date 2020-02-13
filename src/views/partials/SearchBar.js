import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import mainStyle from '../../styles/mainStyle';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';

export default ({navigation}) => {
  return (
    <View style={mainStyle.searchBox}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        activeOpacity={0.6}>
        <Icon name="menu" size={25} color="#3a3b3d" />
      </TouchableOpacity>
      <TextInput
        onFocus={() => navigation.navigate('Search')}
        placeholder="Type a restaurant or a cuisine"
        placeholderTextColor="#bbbcbf"
        selectionColor="#bbbcbf"
        style={{
          position: 'absolute',
          left: 50,
          fontSize: 16,
        }}
      />
      <Icon
        name="search"
        size={25}
        style={{color: '#31d0cf', right: 10, position: 'absolute'}}
      />
    </View>
  );
};
