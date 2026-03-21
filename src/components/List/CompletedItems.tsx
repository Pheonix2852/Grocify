import { useGroceryStore } from '@/store/grocery-store'
import { FontAwesome6 } from "@expo/vector-icons"
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const CompletedItems = () => {

    const {removeItem, togglePurchased, items} = useGroceryStore()
    const completedItems = items.filter((item) => item.purchased);

    if (!completedItems.length) return null;

  return (
    <View className='mt-3 rounded-3xl border border-border bg-secondary p-4'>
      <Text 
        className='text-sm font-semibold uppercase tracking-[1px] text-secondary-foreground'>
            Completed
      </Text>

      {completedItems.map((item) => (
        <View className='mt-3 flex-row items-center justify-between rounded-2xl border border-border bg-card px-3 py-2'>
            <View className='flex-row items-center gap-2'>
                <Pressable
                    onPress={() => { togglePurchased(item.id) }}
                    className='size-6 items-center justify-center bg-success rounded-full'
                >
                    <FontAwesome6 name="check" size={12} color="#FFFFFF"/>                
                </Pressable>

                <Text className='text-balance text-muted-foreground line-through'>
                    {item.name}
                </Text>
            </View>

            <Pressable
                onPress={() => { removeItem(item.id)}}
                className='size-8 items-center justify-center bg-destructive
                 rounded-xl'
            >
                <FontAwesome6 name="trash" size={12} color="#d45f58"/>
            </Pressable>
        </View>
      ))}
    </View>
  )
}

export default CompletedItems