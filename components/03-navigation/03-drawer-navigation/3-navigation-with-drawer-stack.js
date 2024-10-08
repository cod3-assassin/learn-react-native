import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>This is the Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>This is the Details Screen</Text>
        </View>
    );
}

function SettingScreen() {
    return (
        <View>
            <Text>This is the Settings Screen</Text>
        </View>
    );
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default function NavigationWithDrawerStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HomeStack" component={StackNavigator} />
                <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}