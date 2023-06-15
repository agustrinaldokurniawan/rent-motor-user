
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff'
  },
  formContainer: {
    width: '100%',
    gap: 12,
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  inputPassword: {
    paddingRight: 50,
  },
  inputPasswordContainer: {
    position: 'relative'
  },
  eyeContainer: {
    position: 'absolute',
    right: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .5
  },
  textSignup: {
    color: '#fff'
  },
  imageTop: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 32
  },
  loginView: {
    flexDirection: 'row',
    gap: 12,
    opacity: .5,
    alignSelf: 'center'
  }
})