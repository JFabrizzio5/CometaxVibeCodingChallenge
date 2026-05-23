import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
          tabBarActiveTintColor: '#3B82F6',

          headerStyle: {
            backgroundColor: '#111827',
          },

          headerShadowVisible: false,

          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
          },

          headerTintColor: '#fff',

          tabBarStyle: {
            backgroundColor: '#111827',
            borderTopWidth: 0,
            height: 65,
            paddingBottom: 8,
          },

          tabBarInactiveTintColor: '#6B7280',
      }}>
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
