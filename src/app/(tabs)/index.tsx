import CompletedItems from '@/components/List/CompletedItems'
import ListHeroCard from '@/components/List/ListHeroCard'
import PendingItemCard from '@/components/List/PendingItemCard'
import TabScreenBackground from '@/components/TabScreenBackground'
import { useGroceryStore } from '@/store/grocery-store'
import { useEffect } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

export default function Page() {

  const { items, loadItems } = useGroceryStore();

  useEffect(() => {
    loadItems();
  }, []);

  const pendingItems = items.filter((item) => !item.purchased)

  return (
    <ScrollView className='flex-1 bg-background py-4'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding:20, gap:20}}
    >
    <TabScreenBackground />

      <FlatList 
        className='flex-1'
        data={pendingItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PendingItemCard item={item}/>}
        contentContainerStyle={{ gap:14}}
        contentInsetAdjustmentBehavior='automatic'
        ListHeaderComponent={
          <View style={{padding:10, gap:20}}>
            <ListHeroCard />

            <View className='flex-row items-center justify-between px-1'>
              <Text 
                className='text-sm font-semibold uppercase tracking-[1px] text-muted-foreground'
              >
                Shoping Items
              </Text>

              <Text className='text-sm text-muted-foreground'>
                {pendingItems.length} active
              </Text>
            </View>
          </View>
          }
        ListFooterComponent={<CompletedItems />}
        ListEmptyComponent={<Text className='text-white'>NO ITEMS IN DB</Text>}
      />
        
    </ScrollView>
  )
}