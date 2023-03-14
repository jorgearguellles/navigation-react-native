import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen() {
  const route = useRoute();
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
