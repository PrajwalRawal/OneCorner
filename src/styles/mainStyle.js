import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  topContainer: {
    flex: 1,
    paddingTop: 10,
    width: Dimensions.get("screen").width
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    position: "relative"
    // ...boxShadow
  }
});
