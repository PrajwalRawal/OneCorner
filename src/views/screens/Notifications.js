import React from "react";
import { Text, View, StatusBar } from "react-native";
import SearchBar from "../partials/SearchBar";
import { Container, Header, Icon } from "native-base";

export default ({ navigation }) => {
  return (
    <Container style={{ backgroundColor: "red" }}>
      <Header
        transparent
        style={{
          height: 70,
          borderBottomColor: "white"
        }}
      >
        <SearchBar navigation={navigation} />
      </Header>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notifications</Text>
      </View>
    </Container>
  );
};
