import { useGroceryStore } from "@/store/grocery-store";
import { Text, View } from "react-native";

export default function InsightsPrioritySection() {
  const {items} = useGroceryStore();
  const highPriority = items.filter((item) => item.priority === "high" && !item.purchased).length;
  const highPriorityTone = highPriority === 0 ? "Everything Critical is covered" : "Handle thse first for a smoother trip";

  return (
    <View className="rounded-3xl bordr border-border bg-card p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-foreground">High Priority Remaining</Text>
        <View className={`rounded-full px-3 py-1 ${highPriority ? `bg-red-400` : `bg-green-300`}`}>
          <Text 
            className={`text-xs font-bold uppercase text-white`}
          >
            {highPriority? "Action" : "Clear"}
          </Text>
        </View>
      </View>
      <Text className="mt-1 text-3xl font-extrabold text-foreground">{highPriority}</Text>
      <Text className="mt-1 text-sm text-muted-foreground">{highPriorityTone}</Text>
    </View>
  )
}