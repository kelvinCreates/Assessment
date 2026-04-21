import { TrustFooter } from "@/components/xend/TrustFooter";
import { XendLogo } from "@/components/xend/XendLogo";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router, type Href } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const goApp = () => {
    router.replace("/(tabs)" as Href);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoBars}>
            <XendLogo compact />
          </View>
        </View>

        <View style={styles.chatIcon}>
          <Ionicons name="chatbubble-ellipses-outline" size={18} color="#000" />
        </View>
      </View>

      {/* PROFILE */}
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={20} color="white" />
        </View>
        <Text style={styles.welcome}>Welcome, Samuel</Text>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Enter your password</Text>

      <Text style={styles.label}>Your Password</Text>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={18} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#666"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={18}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* FORGOT */}
      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* QR BUTTON */}
      <View style={styles.qrWrapper}>
        <TouchableOpacity style={styles.qrButton}>
          <Feather name="maximize" size={22} color="#ff7a00" />
        </TouchableOpacity>
      </View>

      {/* LOGIN */}
      <TouchableOpacity onPress={goApp} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* SWITCH ACCOUNT */}
      <Text style={styles.switchText}>
        Not you? <Text style={{ color: "#ff7a00" }}>Switch account</Text>
      </Text>
      <TrustFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 20,
    marginTop: 40,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoBars: {
    flexDirection: "row",
    marginRight: 6,
  },

  // bar: {
  //   width: 4,
  //   height: 14,
  //   borderRadius: 2,
  //   marginRight: 2,
  // },

  // headerText: {
  //   color: "white",
  //   fontWeight: "600",
  // },

  chatIcon: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
  },

  /* PROFILE */
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 25,
    // padding: 20,
    borderWidth: 2,
    borderColor: "#2e6cff",
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
  },

  /* TEXT */
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 25,
  },

  label: {
    color: "#aaa",
    marginTop: 20,
  },

  /* INPUT */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2f3a",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 8,
  },

  input: {
    flex: 1,
    color: "white",
    paddingVertical: 12,
    marginHorizontal: 8,
  },

  forgot: {
    color: "white",
    textAlign: "right",
    marginTop: 8,
    fontSize: 12,
  },

  /* QR */
  qrWrapper: {
    alignItems: "center",
    marginTop: 25,
  },

  qrButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  /* LOGIN */
  loginBtn: {
    backgroundColor: "#1C2541",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 25,
  },

  loginText: {
    color: "white",
    fontWeight: "600",
  },

  /* FOOTER */
  switchText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
  },
});
