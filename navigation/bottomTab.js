import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../models/colors";
import Home from "../screens/home";
import Listing from "../screens/listing";
import PostDetails from "../screens/postDetails";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            sceneContainerStyle={{backgroundColor:colors.backgroundColor}}
            screenOptions={{tabBarActiveBackgroundColor: colors.backgroundColor,
                tabBarActiveTintColor: colors.orange,
                tabBarInactiveTintColor: colors.black,
                tabBarStyle: {
                    backgroundColor: colors.primary,
                    height: 50
                }
            }}
        >
            <Tab.Screen name={"Explore"} component={Home}
                options={{
                    tabBarIcon:({color}) => (
                        <FontAwesome name="home" size={25} color={colors.secondary} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name={"Listing"} component={Listing}
                options={{
                    tabBarIcon:({color}) => (
                        <FontAwesome5 name="clipboard-list" size={24} color={colors.secondary} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name={"Chat"} component={Home}
                options={{
                    tabBarIcon:({color}) => (
                        <Entypo name="chat" size={24} color={colors.secondary} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name={"Profile"} component={Home}
                options={{
                    tabBarIcon:({color}) => (
                        <FontAwesome5 name="user-tie" size={24} color={colors.secondary} />
                    ),
                    headerShown: false
                }}
            />
            
        </Tab.Navigator>
    );
};

export default BottomTab;