import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { GlobalStyles } from './constants/styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotificationsPage from './screens/NotificationsPage';
import HomePage from './screens/HomePage';
import UserProfile from './screens/UserProfile';
import MapPage from './screens/MapPage';
import ExplorerPage from './screens/ExplorerPage';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: GlobalStyles.colors.white,
      },
      headerTintColor: GlobalStyles.colors.black,
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.white,
      },
      tabBarActiveTintColor: 'black',
    }}>
      <BottomTabs.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Home',
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "ios-home" : "ios-home-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ExplorerPage"
        component={ExplorerPage}
        options={{
          title: 'Notifications',
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "search-sharp" : "search-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MapPage"
        component={MapPage}
        options={{
          title: 'Map',
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "md-map" : "md-map-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="NotificationsPage"
        component={NotificationsPage}
        options={{
          title: 'Notifications',
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "md-notifications-sharp" : "md-notifications-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'username',
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bot Nav"
            component={BottomNavigator}
            options={
              {
                headerShown: false
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
