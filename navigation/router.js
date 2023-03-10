import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import PostDetails from "../screens/postDetails";
import BottomTab from "./bottomTab";

const Route = () => {
    
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: 'lightgreen'
                    }
                }}>
                <Stack.Screen name="Home" component={BottomTab} options={{headerShown:false}}/>
                <Stack.Screen name="PostDetails" component={PostDetails} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Route;