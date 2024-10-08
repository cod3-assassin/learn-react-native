import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
function Home() {
    return <View>
        <Text>This is Our Home Screen </Text>
    </View>
}

function DetaildScreen() {
    return <Text>This is our Deatil Screen</Text>
}
export default function BasicStackNavigation() {


    return (
        <NavigationContainer>
            <Stack.Navigator initilaRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Deatils' component={DetaildScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


