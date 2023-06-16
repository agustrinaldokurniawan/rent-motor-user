import { Image, TouchableOpacity, View } from "react-native";
import InterText from "../typography/inter-text";
import { transformPrice } from "../../utils/idrPrice";
import { useEffect, useState } from "react";
import { fetchImageFromFirebase } from "../../utils/fetchImageFromFirebase";
import { styles } from "./motor-card.style";

export default function MotorCard({ motor, navigation }) {
  const [imageUri, setImageUri] = useState('No Image')
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchImage()
  }, [])

  const fetchImage = async () => {
    const resp = await fetchImageFromFirebase(motor?.image)
    if (typeof resp === 'string') {
      setImageUri(resp)
    }
  }

  const onPressDetail = () => {
  };

  return (
    <View
      style={styles.container}
    >
      <View style={styles.leftPanel}>
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />
        <View>
          <InterText variant={'bold'} style={styles.textName}>{motor.name}</InterText>
          <InterText style={styles.textType}>{motor.type}</InterText>
          <InterText style={styles.textPrice}>
            {transformPrice(motor.price)} / {motor.duration}
          </InterText>
        </View>
      </View>
    </View>
  );
}
