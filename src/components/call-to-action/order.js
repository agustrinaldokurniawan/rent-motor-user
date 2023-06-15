import { StyleSheet, View } from "react-native";
import InterText from "../typography/inter-text";
import Lottie from "lottie-react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MainButton from "../button/main-button";

export default function CallToActionOrder({ navigation }) {
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <InterText variant={"bold"}>
        Ooop, kamu belum pernah rental motor?
      </InterText>
      <View style={styles.containerLottie}>
        <Lottie
          style={styles.lottie}
          source={require("../../lottie/5081-empty-box.json")}
          autoPlay
          loop
        />
      </View>
      <MainButton style={styles.loginButton} onPress={goHome}>
        <InterText style={styles.textLogin}>Rental Sekarang</InterText>
        <FontAwesome name="long-arrow-right" size={24} color={"#fff"} />
      </MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  lottie: {},
  containerLottie: {
    height: 200,
    width: "100%",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  textLogin: {
    color: "#fff",
  },
});
