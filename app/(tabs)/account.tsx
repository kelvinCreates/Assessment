import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";

export default function AccountScreen() {
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  const username = "@Michael_Chuks";

  const handleCopyUsername = () => {
    Alert.alert("Copied", `${username} copied successfully`);
  };

  const handleMenuPress = () => {
    Alert.alert("Menu", "Menu options clicked");
  };

  const handleReferralPress = () => {
    Alert.alert("Referral", "Referral page opened");
  };

  const handleItemPress = (title: string) => {
    Alert.alert(title, `${title} clicked`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Account</Text>

          <Pressable onPress={handleMenuPress}>
            <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
          </Pressable>
        </View>

        {/* Profile Row */}
        <View style={styles.profileRow}>
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={26} color="#777" />
          </View>

          <Text style={styles.username}>{username}</Text>

          <Pressable onPress={handleCopyUsername} style={styles.copyBtn}>
            <Ionicons name="copy-outline" size={20} color="#999" />
          </Pressable>
        </View>

        {/* Referral Card */}
        <Pressable style={styles.referralCard} onPress={handleReferralPress}>
          <View>
            <Text style={styles.referralTitle}>Referral</Text>
            <Text style={styles.referralSub}>
              Refer friends and earn points
            </Text>
          </View>

          <View style={styles.referralRight}>
            <Ionicons name="trophy" size={22} color="#fff" />
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </Pressable>

        {/* Settings Container */}
        <View style={styles.settingsCard}>
          {/* Account Settings */}
          <Pressable
            style={styles.itemRow}
            onPress={() => handleItemPress("Account Settings")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="person-add-outline" size={20} color="#4f7cff" />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.itemTitle}>Account Settings</Text>
              <Text style={styles.itemSub}>
                Edit your profile and next of kin
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#777" />
          </Pressable>

          {/* Verify Phone Number */}
          <Pressable
            style={styles.itemRow}
            onPress={() => handleItemPress("Verify Phone Number")}
          >
            <View style={styles.iconBox}>
              <Ionicons
                name="shield-checkmark-outline"
                size={20}
                color="#4f7cff"
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.itemTitle}>Verify Phone Number</Text>
              <Text style={styles.itemSub}>Enable OTP notifications</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#777" />
          </Pressable>

          {/* KYC Verification */}
          <Pressable
            style={styles.itemRow}
            onPress={() => handleItemPress("KYC Verification")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="card-outline" size={20} color="#4f7cff" />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.itemTitle}>KYC Verification</Text>
              <Text style={styles.itemSub}>Complete your KYC</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#777" />
          </Pressable>

          {/* Support */}
          <Pressable
            style={styles.itemRow}
            onPress={() => handleItemPress("Support")}
          >
            <View style={styles.iconBox}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={20}
                color="#4f7cff"
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.itemTitle}>Support</Text>
              <Text style={styles.itemSub}>Chat with our support agents</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#777" />
          </Pressable>

          {/* Biometrics */}
          <View style={styles.itemRow}>
            <View style={styles.iconBox}>
              <Ionicons name="finger-print-outline" size={20} color="#4f7cff" />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.itemTitle}>Biometrics</Text>
              <Text style={styles.itemSub}>Enable Secure Login</Text>
            </View>

            <Switch
              value={biometricsEnabled}
              onValueChange={setBiometricsEnabled}
              trackColor={{ false: "#444", true: "#4f7cff" }}
              thumbColor={"#fff"}
            />
          </View>

          {/* Security */}
          <Pressable
            style={styles.itemRow}
            onPress={() => handleItemPress("Security")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="shield-outline" size={20} color="#4f7cff" />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.itemTitle}>Security</Text>
              <Text style={styles.itemSub}>Add an extra layer of security</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#777" />
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom Navigation (UI Only) */}
      {/* <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#777" />
          <Text style={styles.navText}>Home</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Ionicons name="wallet-outline" size={22} color="#777" />
          <Text style={styles.navText}>Wallet</Text>
        </Pressable>

        {/* Center Referral Button */}
      {/* <Pressable style={styles.centerBtn}>
          <View style={styles.centerCircle}>
            <Ionicons name="people" size={22} color="#fff" />
          </View>
          <Text style={styles.navTextActive}>Referral</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Ionicons name="albums-outline" size={22} color="#777" />
          <Text style={styles.navText}>Plans</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Ionicons name="person" size={22} color="#fff" />
          <Text style={styles.navTextActive}>More</Text>
        </Pressable> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
  },

  headerTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
  },

  profileCircle: {
    height: 54,
    width: 54,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#2b57ff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  username: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },

  copyBtn: {
    padding: 8,
  },

  referralCard: {
    backgroundColor: "#1f46d1",
    borderRadius: 14,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  referralTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
  },

  referralSub: {
    fontSize: 13,
    color: "#dbe5ff",
    marginTop: 4,
  },

  referralRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  settingsCard: {
    backgroundColor: "#141414",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#222",
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },

  iconBox: {
    height: 44,
    width: 44,
    borderRadius: 14,
    backgroundColor: "#1b1b1b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  textBox: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  itemSub: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: "#0f0f0f",
    borderTopWidth: 1,
    borderTopColor: "#222",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 8,
    paddingTop: 8,
  },

  navItem: {
    alignItems: "center",
    gap: 4,
  },

  navText: {
    fontSize: 11,
    color: "#777",
  },

  navTextActive: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
  },

  centerBtn: {
    alignItems: "center",
    marginTop: -20,
  },

  centerCircle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#1f46d1",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#0b0b0b",
  },
});
