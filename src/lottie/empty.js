import { StyleSheet, View } from "react-native";
import Lottie from "lottie-react-native";

export default function EmptyLottie() {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.emptyLottie}
        source={require("./5081-empty-box.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyLottie: {
    transform: [{ scale: 0.75 }],
  },
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
