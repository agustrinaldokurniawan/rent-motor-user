import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
    marginTop: 2,
    maxHeight: 100
  },
  leftPanel: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 72,
    height: 75,
    borderRadius: 10,
    resizeMode: "contain",
  },
  textName: {
    textTransform: "capitalize",
  },
  textType: {
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  buttonShow: {
    alignSelf: 'flex-end'
  }
});
