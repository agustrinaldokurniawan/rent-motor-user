import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CallToActionOrder from "../../components/call-to-action/order";

export default function ListOrder(props) {
  const { navigation } = props;
  const [orders, setOrders] = useState([]);

  const onPressDetail = () => {
    navigation.navigate("DetailOrder", {
      order: {
        id: "#123",
      },
    });
  };

  if (!orders.length) {
    return <CallToActionOrder {...props} />;
  }

  return (
    <View style={styles.containerView}>
      <View>
        <Text>List Order</Text>
        <Button title="Detail" onPress={onPressDetail} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
});
