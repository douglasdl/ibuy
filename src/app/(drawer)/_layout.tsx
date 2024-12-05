import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="(tabs)" 
          options={{
            drawerLabel: "Inicio",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            )
          }} 
        />
        <Drawer.Screen name="configs" 
          options={{
            drawerLabel: "Configuracoes",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            )
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}