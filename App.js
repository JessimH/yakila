import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-black flex-1 items-center justify-center">
      <Text className="text-white" >Welcome to Yakila app !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
