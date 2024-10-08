import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";

const Stack = createStackNavigator()

function HomeScreen({ navigation }) {

    return (
        <View>
            <Text>This is our Home Screen</Text>
            <Button title="Go to Detail" onPress={() => navigation.navigate("Detail", { name: "Skipper", age: 24, education: "BCS" })} />
        </View>
    )

}

function DetaildScreen({ route, navigation }) {
    const { name, age, education } = route.params;

    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Education: {education}</Text>
            <Button
                title="Go to Info"
                onPress={() =>
                    navigation.navigate("Info", {
                        name: name,
                        age: age,
                        education: education,
                        profession: "Software Developer"
                    })
                }
            />
        </View>
    );
}


function InfoScreen({ route }) {

    const { name, age, education, profession } = route.params

    return <View>
        <Text>Name :{name}</Text>
        <Text>Age :{age}</Text>
        <Text>Education :{education}</Text>
        <Text>Profession :{profession}</Text>
    </View>


}

export default function StackChallenge() {

    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetaildScreen} />
            <Stack.Screen name="Info" component={InfoScreen} options={{
                headerTitle: "Info Screen",
                headerTintColor: "red",
                headerStyle: { backgroundColor: "yellow" }
            }} />
        </Stack.Navigator>
    </NavigationContainer>



}