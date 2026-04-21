import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
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
              <Ionicons name="person" size={24} color={XendColors.white} />
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
        </View>
      </ScrollView>
    </View>
  );
}
