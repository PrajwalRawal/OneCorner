import React from "react";
import { Text } from "react-native";

export const MyText = props => {
  return (
    <Text style={{ fontFamily: "Arial", color: "#292b2e", ...props.style }}>
      {props.children}
    </Text>
  );
};
