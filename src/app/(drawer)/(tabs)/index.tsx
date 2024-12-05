import { StyleSheet, Text, View } from 'react-native'

export default function Products() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Produtos</Text>
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