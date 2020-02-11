import React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";
import SearchBar from "../partials/SearchBar";
import { Container, Header, Icon } from "native-base";
import colors from "../../styles/colors";

export default ({ navigation, children, noHeader }) => {
  return (
    <Container>
      <StatusBar translucent barStyle="light-content" />
      {!noHeader ? (
        <Header
          style={{
            height: 80,
            borderBottomColor: "white",
            backgroundColor: "#31d0cf"
          }}
        >
          <SearchBar navigation={navigation} />
        </Header>
      ) : (
        <></>
      ) //Back wala
      }
      {children}
    </Container>
  );
};
