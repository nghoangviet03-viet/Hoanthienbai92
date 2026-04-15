import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const { cart, cartTotal, increase, decrease } = useCart();

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#F97316" />
        </TouchableOpacity>

        <Text style={styles.title}>Your Cart 👍</Text>
      </View>

      {/* LIST */}
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {cart.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.image} />

              <View style={{ flex: 1 }}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>
                  ₹ {item.price.toLocaleString()}
                </Text>
              </View>

              <View style={styles.qtyBox}>
                <TouchableOpacity onPress={() => decrease(item.id)}>
                  <Text style={styles.qtyBtn}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => increase(item.id)}>
                  <Text style={styles.qtyBtn}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* FIXED BOTTOM */}
      <View style={styles.bottom}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>
            ₹ {cartTotal.toLocaleString()}
          </Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 56,
    paddingHorizontal: 20,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
    marginBottom: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    minHeight: 118,
  },

  image: {
    width: 84,
    height: 84,
    borderRadius: 22,
    marginRight: 16,
  },

  brand: {
    fontSize: 13,
    color: "#8A8A8A",
    marginBottom: 4,
  },

  name: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111",
    marginBottom: 6,
  },

  price: {
    fontSize: 16,
    fontWeight: "800",
    color: "#F97316",
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 122,
    justifyContent: "space-between",
  },

  qtyBtn: {
    fontSize: 20,
    color: "#F97316",
    paddingHorizontal: 6,
    fontWeight: "700",
  },

  qtyText: {
    fontWeight: "800",
    fontSize: 16,
    color: "#111",
  },

  bottom: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingTop: 18,
    paddingHorizontal: 18,
    paddingBottom: 20,
    marginBottom: 88,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
  },

  totalValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#F97316",
  },

  checkoutBtn: {
    backgroundColor: "#F97316",
    paddingVertical: 18,
    borderRadius: 22,
    alignItems: "center",
  },

  checkoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
