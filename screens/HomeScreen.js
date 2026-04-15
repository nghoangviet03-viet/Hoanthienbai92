import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { products } from "../data/products";

export default function HomeScreen({ navigation }) {
  const cards = [
    {
      icon: "scan-outline",
      title: "Scan new",
      sub: "Scanned 483",
      color: "#6366F1",
      bg: "#E0E7FF",
    },
    {
      icon: "alert-circle-outline",
      title: "Counterfeits",
      sub: "Counterfeited 32",
      color: "#F97316",
      bg: "#FFE4D6",
    },
    {
      icon: "checkmark-circle-outline",
      title: "Success",
      sub: "Checkouts 8",
      color: "#14B8A6",
      bg: "#D1FAE5",
    },
    {
      icon: "calendar-outline",
      title: "Directory",
      sub: "History 26",
      color: "#38BDF8",
      bg: "#E0F2FE",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("../assets/avatar.jpg")}
          style={styles.avatar}
        />
      </View>

      {/* INSIGHTS */}
      <Text style={styles.sectionTitle}>Your Insights</Text>

      <View style={styles.grid}>
        {cards.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: item.bg }]}>
              <Ionicons name={item.icon} size={26} color={item.color} />
            </View>

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.sub}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* EXPLORE */}
      <View style={styles.exploreHeader}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <Feather name="arrow-right" size={22} color="#111" />
      </View>

      {/* PRODUCTS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productRow}
      >
        {products.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.productCard}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ScanPreview", { item })}
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  hello: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111",
  },

  name: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 16,
    color: "#111",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#EDEDED",
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardSub: {
    fontSize: 13,
    color: "#888",
  },

  exploreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  productRow: {
    paddingVertical: 10,
  },

  productCard: {
    width: 140,
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
  },

  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },

  productName: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});