import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="StarMap" component={StarMap} />
<Stack.Screen name="DailyPic" component={DailyPic} />
<Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
