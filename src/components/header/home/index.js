import { StyleSheet, TouchableOpacity, View } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InterText from "../../typography/inter-text";

export default function HomeHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <InterText variant={"bold"} fontSize={30}>
        Semua Motor
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
