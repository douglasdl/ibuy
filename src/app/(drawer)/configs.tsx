import { StyleSheet, Text, View } from 'react-native'

export default function Configs() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Criar conta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})