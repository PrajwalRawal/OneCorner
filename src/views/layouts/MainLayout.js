import React from "react";
import { StatusBar, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../partials/SearchBar";
import { Container, Header, Content } from "native-base";

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
