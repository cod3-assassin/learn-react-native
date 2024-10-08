import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Home Screen (Stack Screen)
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

// Details Screen (Stack Screen)
function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the Details Screen</Text>
        </View>
    );
}

// Settings Screen (Drawer Screen)
function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the Settings Screen</Text>
        </View>
    );
}

// Profile Screen (Drawer Screen)
function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the Profile Screen</Text>
        </View>
    );
}

// Custom Drawer Content
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ padding: 20 }}>
                <Text>Welcome to the App!</Text>
                <Button title="Logout" onPress={() => alert('Logout pressed')} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

// Stack Navigator for Home Screen
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

// Main App Component
export default function DrawerNavigationChallenge() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeStack"
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="HomeStack" component={HomeStack} options={{ drawerLabel: 'Home' }} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
