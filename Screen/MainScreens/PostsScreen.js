import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Icon = createIconSetFromIcoMoon(
  require("../../assets/iconMoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  const { userId } = useSelector((state) => state.auth);

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const getDataFromFirestore = async () => {
    const dbRef = await collection(db, "posts");
    onSnapshot(dbRef, (docSnap) =>
      setPosts(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    (async () => {
      await getDataFromFirestore();
    })();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.wrappContent}>
        <FlatList
          data={posts}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.wrapImg}>
              <Image
                source={{ uri: item.photoStorage }}
                style={{
                  ...styles.img,
                  width: screenWidth * 0.9,
                  height: screenWidth * 0.65,
                }}
              />
              <View style={{ marginTop: 8, marginBottom: 11 }}>
                {posts.length !== 0 && (
                  <Text style={styles.placeTitle}>{item.place}</Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                // onPress={() => {
                //   navigation.navigate("Comments", {
                //     postId: item.id,
                //     photo: item.photoStorage,
                //   });
                // }}
                >
                  <Icon
                    name="message-orange"
                    size={24}
                    color="rgba(33, 33, 33, 0.3)"
                  />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                  <TouchableOpacity
                    style={{ marginRight: 8 }}
                    // onPress={() => {
                    //   navigation.navigate("Map", { location: item.location });
                    // }}
                  >
                    <Icon name="map" size={20} color="rgba(33, 33, 33, 0.8)" />
                  </TouchableOpacity>
                  {posts.length !== 0 && (
                    <Text style={styles.nameLocation}>
                      {item.photoLocationName}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "rgba(180, 180, 180, 0.2)",
    paddingHorizontal: 16,
  },

  wrappContent: {
    marginTop: 32,
  },

  wrapImg: {
    marginBottom: 34,
  },

  img: {
    width: 280,
    height: 200,
    // resizeMode: "cover",
    borderRadius: 8,
    overflow: "hidden",
  },

  placeTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  nameLocation: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    textDecorationLine: "underline",
  },
});
