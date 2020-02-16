import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 45,
    width: Dimensions.get('screen').width - 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    position: 'relative',
    // ...boxShadow
  },
});
