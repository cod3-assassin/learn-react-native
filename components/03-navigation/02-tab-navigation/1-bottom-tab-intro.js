import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BottomTab = createBottomTabNavigator()

function Home() {

    return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Home screen</Text>
    </View>)

}

function Settings() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );

}

export default function BottomTabIntro() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name='Home' component={Home} options={{

                }} />
                <BottomTab.Screen name='Setting' component={Settings} />
            </BottomTab.Navigator>

        </NavigationContainer>
    );
}
