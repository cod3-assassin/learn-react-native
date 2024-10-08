import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

const Stack = createStackNavigator()

function HomeScreen({ navigation }) {
    const nav = navigation.navigate
    return (
        <View>

            <Text>This is the Home comp </Text>

            <Button title="Go to details"

                onPress={() => nav("Details", { name: "Code_Assassin", age: 23, profession: "Native learner" })}
            />
        </View>
    )
}

function DetaildScreen({ route }) {

    const { name, age, profession } = route.params
    return <View>
        <Text>Name :{name}</Text>
        <Text>Age : {age}</Text>
        <Text>Profession :{profession}</Text>
    </View>
}

export default function HeaderCustomization() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetaildScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}