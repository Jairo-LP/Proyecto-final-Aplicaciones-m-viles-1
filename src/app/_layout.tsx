import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

function TabIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <Text style={{ fontSize: 20 }}>{icon}</Text>
      <Text style={{ fontSize: 10, fontWeight: '600', color: '#666' }}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 65,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarActiveTintColor: '#208AEF',
      }}
    >
      <Tabs.Screen
        name="aac"
        options={{
          title: 'Tablero',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="💬" label="Tablero" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🔍" label="Explorar" />
          ),
        }}
      />
    </Tabs>
  );
}
