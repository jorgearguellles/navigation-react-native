import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    // On iOS We need next 4 properties to generate box shadow effect
    backgroundColor: "white",
    shadowColor: "black", // iOS only property
    shadowOffset: { width: 0, height: 2 }, // iOS only property
    shadowRadius: 8, // iOS only property
    shadowOpacity: 0.25, // iOS only property
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
