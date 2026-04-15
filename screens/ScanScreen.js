import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function ScanScreen({ navigation, route }) {
  const item = route?.params?.item;
  const { addToCart } = useCart();

  if (!item) return null;

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={22} color="#4F46E5" />
      </TouchableOpacity>

      {/* PRODUCT IMAGE */}
      <Image source={item.image} style={styles.image} />

      {/* SCAN FRAME */}
      <View style={styles.frame}>
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
      </View>

      {/* BOTTOM CARD */}
      <View style={styles.card}>
        <Image source={item.image} style={styles.thumb} />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.name}>{item.title}</Text>
        </View>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => addToCart(item)}
        >
          <Ionicons name="add" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7D8C9", // nền beige giống ảnh
    alignItems: "center",
    justifyContent: "center",
  },

  backBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  image: {
    width: 260,
    height: 420,
    resizeMode: "contain",
  },

  frame: {
    position: "absolute",
    width: 260,
    height: 420,
  },

  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "#FFF",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 16,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 16,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 16,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 16,
  },

  card: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  thumb: {
    width: 60,
    height: 60,
    borderRadius: 14,
    marginRight: 12,
  },

  brand: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#4F46E5", // xanh tím giống ảnh
    alignItems: "center",
    justifyContent: "center",
  },
});