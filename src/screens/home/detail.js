import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import InterText from "../../components/typography/inter-text";
import { fetchImageFromFirebase } from "../../utils/fetchImageFromFirebase";
import { transformPrice } from "../../utils/idrPrice";
import MainButton from "../../components/button/main-button";

export default function DetailMotor({ route, navigation }) {
  const { motor } = route.params;
  const [imageUri, setImageUri] = useState("No Image");

  useEffect(() => {
    setNavigationOptions();
  }, [navigation, motor]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const resp = await fetchImageFromFirebase(motor?.image);
    if (typeof resp === "string") {
      setImageUri(resp);
    }
  };

  const getDuration = (duration) => {
    switch (duration) {
      case "month":
        return "Bulanan";
      default:
        return "Harian";
    }
  };

  const setNavigationOptions = () => {
    navigation.setOptions({
      title: motor?.name || "Detail Motor",
    });
  };

  const goCreateOrder = () => {
    navigation.navigate('CreateOrder', {
      motor
    })
  }

  return (
    <View>
      <View style={styles.mainView}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.viewDescription}>
          <InterText variant={"bold"} fontSize={20}>
            {motor.name}
          </InterText>
          <InterText>{motor.type}</InterText>

          <View style={styles.viewSpec}>
            <InterText>Durasi rental: {getDuration(motor.duration)}</InterText>
            <InterText>Merk: {motor.production}</InterText>
          </View>
        </View>
        <MainButton onPress={goCreateOrder}>
          <InterText>Rental Sekarang</InterText>
        </MainButton>
        <View style={styles.bottomView}>
          <InterText style={styles.priceTitle} fontSize={20}>
            Harga
          </InterText>
          <InterText style={styles.priceTitle} fontSize={25} variant={"bold"}>
            {transformPrice(motor.price)}
          </InterText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: "#fff",
  },
  image: {
    height: 250,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  viewDescription: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  viewSpec: {
    marginVertical: 30,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
