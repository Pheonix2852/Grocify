import { useGroceryStore } from "@/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

export default function ClearCompletedButton () {
  const { clearPurchased } = useGroceryStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleClearPurchased = async () => {
    setIsLoading(true);
    try {
      await clearPurchased();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Pressable 
      className="mt-5 flex-row items-center justify-center gap-4 rounded-2xl py-3 bg-primary" 
      onPress={handleClearPurchased}
      disabled={isLoading}>
      {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
        ) : (
            <FontAwesome6 name="trash" size={14} color="#fff"/>
        )}
        <Text 
            className="text-center text-base font-semibold text-primary-foreground"
        >
            {isLoading ? "Clearing..." : "Clear Completed Items"}
        </Text>
    </Pressable>
  )
}