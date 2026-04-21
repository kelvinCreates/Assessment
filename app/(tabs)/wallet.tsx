import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { XendColors, XendSpace } from "@/constants/xend-theme";

const TABS = ["Stablecoins", "Utility", "Memes"] as const;

const ASSETS = [
  { sym: "CNGN", name: "Compliant Naira", color: "#7B61FF", letter: "h" },
  { sym: "USDT", name: "Tether USD", color: "#26A178", letter: "T" },
  { sym: "USDC", name: "USD coin", color: "#2775CA", letter: "S" },
] as const;

const ACTIONS = [
  { key: "add", label: "Add Fund", icon: "add" as const },
  { key: "wd", label: "Withdraw", icon: "arrow-down-circle-outline" as const },
  { key: "swap", label: "Swap", icon: "swap-vertical" as const },
  { key: "stmt", label: "Statement", icon: "document-text-outline" as const },
] as const;

export default function WalletScreen() {
  const insets = useSafeAreaInsets();
  const [hidden, setHidden] = useState(true);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Stablecoins");

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingHorizontal: XendSpace.screenX },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Wallet</Text>

        <View style={styles.heroCard}>
          <View style={styles.heroTop}>
            <Text style={styles.heroLabel}>My Asset Portfolio</Text>
            <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8}>
              <Ionicons
                name={hidden ? "eye-outline" : "eye-off-outline"}
                size={22}
                color="#fff"
              />
            </Pressable>
          </View>
          <Text style={styles.heroBal}>
            {hidden ? "*******" : "$ 12,400.55"}
          </Text>
        </View>
        <View style={styles.actionRow}>
          {ACTIONS.map((a) => (
            <Pressable key={a.key} style={styles.actionItem}>
              <View style={styles.actionIcon}>
                <Ionicons
                  name={a.icon}
                  size={24}
                  color={XendColors.primaryBlue}
                />
              </View>
              <Text style={styles.actionLabel}>{a.label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.segment}>
          {TABS.map((t) => (
            <Pressable
              key={t}
              onPress={() => setTab(t)}
              style={[styles.segItem, tab === t && styles.segItemActive]}
            >
              <Text style={[styles.segText, tab === t && styles.segTextActive]}>
                {t}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.list}>
          {ASSETS.map((a, i) => (
            <View key={a.sym}>
              <Pressable style={styles.assetRow}>
                <View style={[styles.coin, { backgroundColor: a.color }]}>
                  <Text style={styles.coinLetter}>{a.letter}</Text>
                </View>
                <View style={styles.assetMid}>
                  <Text style={styles.sym}>{a.sym}</Text>
                  <Text style={styles.full}>{a.name}</Text>
                </View>
                <View style={styles.assetRight}>
                  <Text style={styles.maskLine}>
                    {hidden ? "******" : "1,200.00"}
                  </Text>
                  <Text style={styles.maskLineSmall}>
                    {hidden ? "******" : "= $1,200"}
                  </Text>
                </View>
                <View style={styles.chevBtn}>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={XendColors.textSecondary}
                  />
                </View>
              </Pressable>
              {i < ASSETS.length - 1 ? <View style={styles.divider} /> : null}
            </View>
          ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: XendColors.background,
  },

  scroll: {
    paddingBottom: 24,
  },

  title: {
    color: XendColors.text,
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 18,
  },

  heroCard: {
    backgroundColor: XendColors.primaryBlue,
    borderRadius: 18,
    padding: 20,
    marginBottom: 22,
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heroLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.9,
  },

  heroBal: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "900",
    marginTop: 14,
    letterSpacing: 1,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },

  actionItem: {
    alignItems: "center",
    width: "22%",
  },

  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#e8eef8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  actionLabel: {
    color: XendColors.text,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.9,
  },

  // SEGMENT TAB
  segment: {
    flexDirection: "row",
    backgroundColor: "#151515",
    borderRadius: 40,
    padding: 6,
    marginBottom: 20,
  },

  segItem: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  segItemActive: {
    backgroundColor: XendColors.primaryBlue,
  },

  segText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#bdbdbd",
  },

  segTextActive: {
    color: "#fff",
  },

  // LIST
  list: {
    backgroundColor: "#151515",
    borderRadius: 18,
    paddingVertical: 8,
  },

  assetRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  coin: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  coinLetter: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  assetMid: {
    flex: 1,
  },

  sym: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 2,
  },

  full: {
    color: "#9b9b9b",
    fontSize: 12,
    fontWeight: "600",
  },

  assetRight: {
    alignItems: "flex-end",
    marginRight: 10,
  },

  maskLine: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  maskLineSmall: {
    color: "#9b9b9b",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },

  chevBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
    justifyContent: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#222",
    marginLeft: 72,
  },
});
