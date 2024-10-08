import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";


const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <View>
            <Text>This is Home Screen Comp </Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View>
            <Text>This is Setting Screen </Text>
        </View>
    )
}


export default function BacisDrawerNaviagtion() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Setting" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}