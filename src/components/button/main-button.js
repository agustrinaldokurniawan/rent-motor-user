import { StyleSheet, TouchableOpacity } from "react-native";

export default function MainButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}
      style={[styles.container, props.style]}>
      {props.children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E57C23',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
})