import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PlansScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* TITLE */}
        <Text style={styles.title}>Plans</Text>

        {/* BLUE CARD */}
        <View style={styles.heroCard}>
          <Text style={styles.heroSmall}>SAVINGS PLAN</Text>
          <Text style={styles.heroBal}>USD 0.00</Text>
        </View>

        {/* TWO ACTION BOXES */}
        <View style={styles.topGrid}>
          {/* Create Plan */}
          <Pressable style={[styles.topBox, styles.orangeBorder]}>
            <View style={[styles.topIconWrap, styles.orangeIconBg]}>
              <MaterialCommunityIcons
                name="piggy-bank-outline"
                size={22}
                color="#F2994A"
              />
            </View>

            <Text style={styles.orangeTitle}>Create Plan</Text>
            <Text style={styles.topSub}>
              Create a new fixed{"\n"}savings plan
            </Text>
          </Pressable>

          {/* Interest Calculator */}
          <Pressable style={[styles.topBox, styles.blueBorder]}>
            <View style={[styles.topIconWrap, styles.blueIconBg]}>
              <Ionicons name="calculator-outline" size={22} color="#2D5BFF" />
            </View>

            <Text style={styles.whiteTitle}>Interest{"\n"}Calculator</Text>
            <Text style={styles.topSub}>
              Calculate the interest on{"\n"}your savings
            </Text>
          </Pressable>
        </View>

        {/* ALL SAVINGS PLANS */}
        <Text style={styles.sectionTitle}>ALL SAVINGS PLANS</Text>

        <View style={styles.bottomGrid}>
          {/* Flexible Savings */}
          <View style={styles.savingsCard}>
            <Text style={styles.savingsSmall}>FLEXIBLE SAVINGS</Text>
            <Text style={styles.savingsBal}>$0.00</Text>

            <View style={styles.cardActionRow}>
              <View style={styles.smallBlueBtn}>
                <Ionicons name="add" size={15} color="#fff" />
              </View>
              <Text style={styles.cardActionText}>ADD FUNDS</Text>
            </View>
          </View>

          {/* Fixed Savings */}
          <View style={styles.savingsCard}>
            <Text style={styles.savingsSmall}>FIXED SAVINGS</Text>
            <Text style={styles.savingsBal}>$0.00</Text>

            <View style={styles.cardActionRow}>
              <View style={styles.smallBlueBtn}>
                <Ionicons name="list" size={12} color="#fff" />
              </View>
              <Text style={styles.cardActionText}>VIEW ALL PLANS</Text>
            </View>
          </View>
        </View>

        {/* TODAY RATE */}
        <Text style={styles.sectionTitle}>TODAY'S RATE</Text>
        <Text style={styles.rateText}>
          This rate is updated daily (Apr 13, 2026 02:43 AM)
        </Text>

        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0b0b0b",
  },

  scroll: {
    paddingHorizontal: 18,
    paddingBottom: 30,
  },

  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 18,
  },

  heroCard: {
    backgroundColor: "#2446d5",
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 22,
    marginBottom: 22,
  },

  heroSmall: {
    fontSize: 13,
    fontWeight: "700",
    color: "rgba(255,255,255,0.75)",
    letterSpacing: 2,
    marginBottom: 10,
  },

  heroBal: {
    fontSize: 44,
    fontWeight: "900",
    color: "#fff",
  },

  topGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  topBox: {
    width: "48%",
    borderRadius: 18,
    padding: 16,
    backgroundColor: "#111",
    minHeight: 170,
  },

  orangeBorder: {
    borderWidth: 1.5,
    borderColor: "#F2994A",
  },

  blueBorder: {
    borderWidth: 1.5,
    borderColor: "#2D5BFF",
  },

  topIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  orangeIconBg: {
    backgroundColor: "#eee2cf",
  },

  blueIconBg: {
    backgroundColor: "#101622",
  },

  orangeTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#F2994A",
    marginBottom: 6,
  },

  whiteTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 6,
  },

  topSub: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8e8e8e",
    lineHeight: 18,
  },

  sectionTitle: {
    marginTop: 10,
    marginBottom: 14,
    fontSize: 13,
    fontWeight: "800",
    color: "#6f6f6f",
    letterSpacing: 2,
  },

  bottomGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },

  savingsCard: {
    width: "48%",
    borderRadius: 18,
    backgroundColor: "#1E1E1E",
    padding: 16,
    minHeight: 165,
  },

  savingsSmall: {
    fontSize: 12,
    fontWeight: "800",
    color: "#6f6f6f",
    letterSpacing: 2,
    marginBottom: 18,
  },

  savingsBal: {
    fontSize: 42,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 22,
  },

  cardActionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  smallBlueBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#2446d5",
    justifyContent: "center",
    alignItems: "center",
  },

  cardActionText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#bdbdbd",
    letterSpacing: 1,
  },

  rateText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#7a7a7a",
    lineHeight: 18,
  },
});
