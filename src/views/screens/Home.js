import React from "react";
import { Text, View, StatusBar } from "react-native";
import SearchBar from "../partials/SearchBar";
import { Container, Header, Icon } from "native-base";
import MainLayout from "../layouts/MainLayout";
import { MyText } from "../components/index";

export default ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View
        style={{
          flex: 1,
          margin: 20
        }}
      >
        <MyText style={{ fontSize: 24, fontWeight: "bold" }}>
          Hi, Vesper!
        </MyText>
        <MyText style={{ fontSize: 16, marginTop: 10 }}>
          What are you craving?
        </MyText>
      </View>
    </MainLayout>
  );
};
