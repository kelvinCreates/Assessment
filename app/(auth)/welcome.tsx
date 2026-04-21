import { Ionicons } from "@expo/vector-icons";
import { useRouter, type Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/xend/PrimaryButton";
import { SupportChatButton } from "@/components/xend/SupportChatButton";
import { TrustFooter } from "@/components/xend/TrustFooter";
import { XendColors, XendSpace } from "@/constants/xend-theme";

function GoogleMark() {
  return (
    <View style={styles.gWrap}>
      <Text style={styles.gLetter}>G</Text>
    </View>
  );
}

export default function WelcomeSocialScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar style="light" />

      {/* Top Bar */}
      <View style={[styles.topBar, { paddingHorizontal: XendSpace.screenX }]}>
        <View style={{ width: 44 }} />
        <SupportChatButton />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.hero}>
          <View style={[styles.coinBlur, styles.coinBlurTop]} />

          <View style={styles.coinMain}>
            <View style={styles.coinRim} />
            <View style={styles.coinFace}>
              <View style={styles.coinLogoBar}>
                <View
                  style={[
                    styles.miniBar,
                    { height: 12, backgroundColor: XendColors.orange },
                  ]}
                />
                <View
                  style={[
                    styles.miniBar,
                    { height: 18, backgroundColor: "#885CF6" },
                  ]}
                />
                <View
                  style={[
                    styles.miniBar,
                    { height: 14, backgroundColor: XendColors.primaryBlue },
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={[styles.coinBlur, styles.coinBlurBot]} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Welcome to the{"\n"}Future of finance</Text>

        {/* Subtitle */}
        <Text style={styles.sub}>
          To get started create an account, if you already have an account we
          will log you in
        </Text>

        {/* Buttons */}
        <View style={styles.gap}>
          <PrimaryButton
            label="Continue with Email"
            variant="blue"
            left={<Ionicons name="mail-outline" size={22} color="#FFF" />}
            onPress={() => router.push("/email" as Href)}
          />

          <PrimaryButton
            label="Continue with Google"
            variant="outline"
            left={<GoogleMark />}
            onPress={() => router.push("/email" as Href)}
          />

          <PrimaryButton
            label="Continue with Apple"
            variant="outline"
            left={<Ionicons name="logo-apple" size={22} color="#FFF" />}
            onPress={() => router.push("/email" as Href)}
          />
        </View>

        <TrustFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: XendColors.background,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  scroll: {
    paddingHorizontal: XendSpace.screenX,
    paddingBottom: 40,
  },

  hero: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 240,
    marginBottom: 10,
  },

  coinBlur: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2A2A2A",
    opacity: 0.5,
  },

  coinBlurTop: {
    top: 20,
    transform: [{ scale: 0.85 }],
  },

  coinBlurBot: {
    bottom: 20,
    transform: [{ scale: 0.7 }],
  },

  coinMain: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#C9A27A",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    elevation: 12,
  },

  coinRim: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "rgba(225,225,225,0.25)",
  },

  coinFace: {
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  coinLogoBar: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },

  miniBar: {
    width: 6,
    borderRadius: 2,
  },

  title: {
    color: XendColors.text,
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 34,
    marginBottom: 12,
  },

  sub: {
    color: "#A1A1AA",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  gap: {
    gap: 14,
    marginBottom: 20,
  },

  gWrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  gLetter: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4285F4",
  },
});
