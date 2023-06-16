import React, { useEffect } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import InterText from "../../components/typography/inter-text";
import MainButton from "../../components/button/main-button";
import MotorCard from "../../components/motors/motor-card";
import InputText from "../../components/input/input-text";
import AgreementComponent from "../../components/agreement";

export default function CreateOrder({ route, navigation }) {
  const { motor } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: motor?.name
    })
  }, [])

  const onPressCancel = () => {
    navigation.goBack()
  }

  const onPressConfirm = () => {
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerTop}>
        <InterText variant={'bold'} fontSize={32}>Konfirmasi</InterText>
        <MotorCard motor={motor} navigation={navigation} />
        <KeyboardAvoidingView style={styles.formContainer}>
          <InterText>Lengkapi Data Peminjam:</InterText>
          <InputText placeholder="Nama Peminjam" />
          <InputText placeholder="Nomor Hp Peminjam" />
        </KeyboardAvoidingView>

        <AgreementComponent />
      </View>
      <View>
        <View style={styles.priceContainer}>
          <InterText fontSize={20}>Total Biaya:</InterText>
          <InterText fontSize={24} variant={'bold'}>Rp 1.000.000</InterText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton style={styles.buttonBack} onPress={onPressCancel}>
            <InterText style={styles.textBack}>
              Batal
            </InterText>
          </MainButton>
          <MainButton style={styles.buttonNext} onPress={onPressConfirm}>
            <InterText style={styles.textNext}>
              Konfirmasi
            </InterText>
          </MainButton>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  containerTop: {
    flex: 1,
    gap: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
    alignItems: 'center'
  },
  formContainer: {
    gap: 12
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  buttonBack: {
    flex: 1,
    backgroundColor: '#F24C3D'
  },
  buttonNext: {
    flex: 1
  },
  textBack: {
    color: '#fff'
  },
  textNext: {
    color: '#fff'
  }
})