import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ExploreCard({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ScanPreview", { item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price.toLocaleString("vi-VN")} VND</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 168,
    borderRadius: 24,
    padding: 16,
    marginRight: 14,
  },
  image: {
    width: "100%",
    height: 112,
    borderRadius: 18,
    marginBottom: 14,
    resizeMode: "cover",
    backgroundColor: "#FFFFFF",
  },
  brand: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#166534",
  },
});
