import { TouchableOpacity, View } from "react-native";
import InterText from "../typography/inter-text";
import dataAgreement from '../../data/agreement.json'
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from "./styles";

export default function AgreementComponent() {
  const [data, setData] = useState()
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if (dataAgreement) {
      const data = Object.entries(dataAgreement[0])
      setData(data)
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
      <View style={styles.containerTitle}>
        <InterText variant={'bold'} fontSize={20}>Pernyataan</InterText>
        <Ionicons style={styles.iconDown} name="chevron-down-sharp" size={24} />
      </View>
      {
        show && data?.length ? data.map((item, key) => (
          <View key={key} style={styles.containerItem}>
            <InterText variant={'bold'}>{item[0]}</InterText>
            {
              item[1].map((subItem, subKey) => (
                <View key={subKey} style={styles.subItemTextContainer}>
                  <InterText style={styles.subItemText} fontSize={14}>{subKey + 1}.</InterText>
                  <InterText style={styles.subItemText} fontSize={14}>{subItem}</InterText>
                </View>

              ))
            }
          </View>
        )) : ''
      }
    </TouchableOpacity>
  )
}