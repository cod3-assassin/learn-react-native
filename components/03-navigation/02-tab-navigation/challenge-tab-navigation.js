import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // For custom icons

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is Home screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} // Corrected navigation to Profile
            />
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is Profile screen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')} // Added button to navigate to Settings
            />
        </View>
    );
}

function SetttingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is Settings screen</Text>
        </View>
    );
}

function HomeScreenTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'TabHome') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'TabProfile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'TabSettings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="TabHome" component={HomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="TabProfile" component={ProfileScreen} options={{ title: 'Profile' }} />
            <Tab.Screen name="TabSettings" component={SetttingScreen} options={{ title: 'Settings' }} />
        </Tab.Navigator>
    );
}

export default function HomeStackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* The tab navigator is now properly used within the stack */}
                <Stack.Screen name="MainHome" component={HomeScreenTab} options={{ title: 'Home' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SetttingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
