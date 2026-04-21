import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SupportChatButton } from "@/components/xend/SupportChatButton";
import { XendColors, XendSpace } from "@/constants/xend-theme";

const QUICK_ACTIONS = [
  { key: "bank", label: "To Bank", badge: "NEW" as const },
  { key: "withdraw", label: "Withdraw" },
  { key: "save", label: "Save" },
  { key: "invest", label: "Invest" },
  { key: "yield", label: "High Yield", badge: "NEW" as const },
  { key: "swap", label: "Swap" },
] as const;

function QuickIcon({
  actionKey,
}: {
  actionKey: (typeof QUICK_ACTIONS)[number]["key"];
}) {
  const blue = XendColors.primaryBlue;
  switch (actionKey) {
    case "bank":
      return (
        <MaterialCommunityIcons name="bank-outline" size={26} color={blue} />
      );
    case "withdraw":
      return (
        <MaterialCommunityIcons
          name="arrow-down-circle-outline"
          size={26}
          color={blue}
        />
      );
    case "save":
      return (
        <MaterialCommunityIcons
          name="piggy-bank-outline"
          size={26}
          color={blue}
        />
      );
    case "invest":
      return (
        <MaterialCommunityIcons
          name="hand-coin-outline"
          size={26}
          color={blue}
        />
      );
    case "yield":
      return (
        <MaterialCommunityIcons name="chart-line" size={26} color={blue} />
      );
    case "swap":
      return (
        <MaterialCommunityIcons name="swap-vertical" size={26} color={blue} />
      );
    default:
      return null;
  }
}

const TODOS = [
  "Update your profile.",
  "Verify your Phone Number",
  "Complete KYC / Liveness Check",
];

export default function HomeSreen() {
  const insets = useSafeAreaInsets();
  const [hidden, setHidden] = useState(true);

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
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color="#8e8e93" />
            </View>
            <View>
              <Text style={styles.hi}>Hi, @samuel</Text>
              <Text style={styles.subHi}>Start saving now</Text>
            </View>
          </View>
          <SupportChatButton />
        </View>

        <View style={styles.portfolioWrap}>
          <View style={styles.portfolioCard}>
            <View style={styles.portTop}>
              <View style={styles.portLabelRow}>
                <Text style={styles.portLabel}>PORTFOLIO BALANCE</Text>
                <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8}>
                  <Ionicons
                    name={hidden ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={XendColors.text}
                  />
                </Pressable>
              </View>
              <Text style={styles.balance}>
                {hidden ? "**********" : "₦ 12,345,678.90"}
              </Text>
              <Pressable style={styles.historyLink}>
                <Text style={styles.historyText}>Transaction History</Text>
                <Ionicons name="chevron-forward" size={14} color="#fff" />
              </Pressable>
            </View>
            <Pressable style={styles.addFunds}>
              <Text style={styles.addFundsText}>+ Add Funds</Text>
            </Pressable>
          </View>
          <View style={styles.savingsCard}>
            <View style={styles.savingsIcon}>
              <MaterialCommunityIcons
                name="sprout-outline"
                size={28}
                color={XendColors.primaryBlue}
              />
            </View>
            <View style={styles.savingsMid}>
              <Text style={styles.savingsTitle}>Total Savings</Text>
              <Text style={styles.savingsAnt}>
                {hidden ? "********" : "₦ 150,000.90"}
              </Text>
            </View>
            <Pressable style={styles.plansPill}>
              <Text style={styles.plansPillText}>Plans</Text>
              <Ionicons
                name="chevron-forward"
                size={14}
                color={XendColors.primaryBlue}
              />
            </Pressable>
          </View>
        </View>

        <Text style={styles.sectionLabel}>QUICK ACTIONS</Text>
        <View style={styles.qaGrid}>
          {QUICK_ACTIONS.map((item) => (
            <Pressable key={item.key} style={styles.qaItem}>
              <View style={styles.qaIconWrap}>
                <QuickIcon actionKey={item.key} />
                {"badge" in item && item.badge ? (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                ) : null}
              </View>
              <Text style={styles.qaLabel}>{item.label}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionLabel}>TO DO</Text>

        <View style={styles.todoList}>
          {TODOS.map((t) => (
            <View key={t} style={styles.todoRow}>
              <View style={styles.checkbox} />
              <Text style={styles.todoText}>{t}</Text>
            </View>
          ))}
        </View>
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0B0B0F",
  },

  scroll: {
    paddingBottom: 100,
  },

  /* ================= HEADER ================= */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#2E5BFF",
    justifyContent: "center",
    alignItems: "center",
  },

  hi: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  subHi: {
    color: "#9CA3AF",
    fontSize: 13,
    marginTop: 2,
  },

  /* ================= PORTFOLIO ================= */
  portfolioWrap: {
    marginBottom: 24,
  },

  portfolioCard: {
    backgroundColor: "#2E5BFF",
    borderRadius: 18,
    padding: 16,
  },

  portTop: {
    marginBottom: 16,
  },

  portLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  portLabel: {
    color: "#D1D5DB",
    fontSize: 11,
    letterSpacing: 1,
  },

  balance: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 10,
  },

  historyLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  historyText: {
    color: "#fff",
    fontSize: 13,
  },

  addFunds: {
    marginTop: 10,
    alignSelf: "flex-end",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },

  addFundsText: {
    color: "#2E5BFF",
    fontSize: 12,
    fontWeight: "600",
  },

  /* ================= SAVINGS CARD ================= */
  savingsCard: {
    marginTop: -20,
    backgroundColor: "#E5E7EB",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  savingsIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  savingsMid: {
    flex: 1,
    marginLeft: 10,
  },

  savingsTitle: {
    fontSize: 13,
    color: "#374151",
  },

  savingsAnt: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginTop: 2,
  },

  plansPill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2E5BFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  plansPillText: {
    color: "#2E5BFF",
    marginRight: 4,
    fontSize: 12,
    fontWeight: "500",
  },

  /* ================= SECTION LABEL ================= */
  sectionLabel: {
    color: "#6B7280",
    fontSize: 12,
    marginBottom: 14,
    letterSpacing: 1,
  },

  /* ================= QUICK ACTIONS ================= */
  qaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  qaItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 18,
  },

  qaIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  qaLabel: {
    color: "#fff",
    fontSize: 12,
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#EF4444",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },

  badgeText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "700",
  },

  /* ================= TODO ================= */
  todoList: {
    gap: 12,
  },

  todoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    padding: 14,
    borderRadius: 12,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#2E5BFF",
    marginRight: 12,
  },

  todoText: {
    color: "#fff",
    fontSize: 14,
  },
});
