import { Text, View, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()


//HomeScreen Comp 
function HomeScreen({ navigation }) {
    return <View>
        <Text>This is our Home screen </Text>
        <Button title="Go to Deatils"


            onPress={() => navigation.navigate("Details", { itemId: 24, otherParam: "Smaple data", name: "Cod3_assassin" })}
        />
    </View>

}

//Detaild Screen comp 
function DetailsScreen({ route }) {
    const { itemId, otherParam, name } = route.params;
    return (
        <View>
            <Text>Details Screen</Text>
            <Text>Item ID: {itemId}</Text>
            <Text>Other Param: {otherParam}</Text>
            <Text>Name: {name}</Text>
        </View>
    );
}



//Navigation Screen Comp 
export default function PassingParamStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}