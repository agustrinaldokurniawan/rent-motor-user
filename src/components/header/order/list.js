import { StyleSheet, View } from "react-native";
import InterText from "../../typography/inter-text";

export default function ListOrderHeader({}) {
  return (
    <View style={styles.container}>
      <InterText variant={"bold"} fontSize={30}>
        Semua Order
      </InterText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
});
