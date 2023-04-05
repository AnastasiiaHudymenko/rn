import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

export const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params.location;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
    </View>
  );
};
