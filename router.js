import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Registration } from "./Screen/RegisterScreen";
import { Login } from "./Screen/LoginScreen";
import { HomePage } from "./Screen/MainScreens/Home";

const AuthStack = createStackNavigator();

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
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="Home"
        component={HomePage}
      />
    </AuthStack.Navigator>
  );
};

// const styles = StyleSheet.create({
//   containerTabNav: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 70,
//     height: 40,
//     backgroundColor: "#FF6C00",
//     borderRadius: 20,
//   },
//   logOutBtn: {
//     marginRight: 10,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   arrowLeft: {
//     marginLeft: 16,

//     // flex: 1,
//     // justifyContent: "center",
//     // alignItems: "center",
//   },
// });
