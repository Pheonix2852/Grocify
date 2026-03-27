import ClearCompletedButton from '@/components/Insights/ClearCompletedButton'
import InsightsCategorySection from '@/components/Insights/InsightsCategorySection'
import InsightsPrioritySection from '@/components/Insights/InsightsPrioritySection'
import InsightsStatsSection from '@/components/Insights/InsightsStatsSection'
import SentryFeedbackButton from '@/components/Insights/SentryFeedbackButton'
import UserProfile from '@/components/Insights/UserProfile'
import TabScreenBackground from '@/components/TabScreenBackground'
import React from 'react'
import { ScrollView } from 'react-native'

const InsightsScreen = () => {
  return (
    <>
      <ScrollView 
        className="flex-1 bg-background py-4"
        contentContainerStyle={{padding: 20, gap: 14}}
        contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 40}}
      >
        <TabScreenBackground />

        <UserProfile />
        <InsightsStatsSection />
        <InsightsCategorySection />
        <InsightsPrioritySection />
        <ClearCompletedButton />
      </ScrollView>

      <SentryFeedbackButton />
    </>
  )
}

export default InsightsScreen