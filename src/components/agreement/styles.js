import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 12
  },
  containerTitle: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  iconDown: {
    alignSelf: 'flex-end'
  },
  containerItem: {
    marginVertical: 12
  },
  subItemText: {
    fontStyle: 'italic',
    opacity: .6,
  },
  subItemTextContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    gap: 4,
    width: '95%'
  }
})