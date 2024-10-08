import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Custom Drawer Content</Text>
                <Button title="Custom Action" onPress={() => { /* Handle action */ }} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function HomeScreen() {
    return (
        <View>
            <Text>This is the Home Screen</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View>
            <Text>This is the Settings Screen</Text>
        </View>
    );
}

export default function CustomDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
