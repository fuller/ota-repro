import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Updates from "expo-updates";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Using Embeddeded Assets: {String(Updates.isUsingEmbeddedAssets)}
      </Text>
      <Text>manifest: {JSON.stringify(Updates.manifest?.commitTime)}</Text>

      <Text>Test</Text>

      <Button
        title="Press to reload"
        onPress={async () => {
          const check = await Updates.checkForUpdateAsync();
          if (check.isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
