import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Freedom learn</Text>
      <Text style={styles.title}>=Drawer and other page </Text>
      <Text style={styles.title}>=with theme,icon and set ups</Text>
      <Text style={styles.title}>=font loading</Text>
      <Text style={styles.title}>=home page with icons and stack design</Text>
      <Text style={styles.title}>
        =tabs navigation and top bar navigation in app
      </Text>

      <StatusBar style="auto" />
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
  title: {
    fontSize: 20,
  },
});
