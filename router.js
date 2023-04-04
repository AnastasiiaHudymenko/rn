import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Registration } from "./Screen/RegisterScreen";
import { Login } from "./Screen/LoginScreen";
import { HomePage } from "./Screen/MainScreens/Home";
import { TouchableOpacity, View, StyleSheet } from "react-native";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const Icon = createIconSetFromIcoMoon(
  require("./assets/iconMoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export const useRoute = (isAuth) => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/iconMoon/icomoon.ttf"),
  });
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Register"
          component={Registration}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator initialRouteName="Home">
      <MainTab.Screen
        options={{
          // headerShown: false,
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity style={styles.logOutBtn}>
              <Icon name="log-out" size={24} color="rgba(33, 33, 33, 0.8)" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <View>
              <Icon name="grid_home" size={24} color="rgba(33, 33, 33, 0.8)" />
            </View>
          ),
        }}
        name="Home"
        component={HomePage}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  containerTabNav: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  logOutBtn: {
    marginRight: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  arrowLeft: {
    marginLeft: 16,

    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
