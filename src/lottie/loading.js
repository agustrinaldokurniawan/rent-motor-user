import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native'

export default function LoadingLottie({ children }) {
  return (
    <View style={styles.container}>
      <Lottie style={styles.emptyLottie}
        source={require('../lottie/54355-motorcycle-loading.json')} autoPlay loop />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
})