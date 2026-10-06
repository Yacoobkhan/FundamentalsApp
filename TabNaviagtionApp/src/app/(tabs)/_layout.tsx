import {Tabs} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout(){
    return (
        <Tabs screenOptions={{
            tabBarLabelPosition:"below-icon",
            tabBarShowLabel:true,
            headerTitle:"Expo Router",
            tabBarActiveTintColor:"red",
            tabBarInactiveTintColor:"blue",
            tabBarStyle:{backgroundColor:"yellow",height:60},
            headerStyle:{backgroundColor:"green",height:60},
            headerTintColor:"white",
        }}>
            <Tabs.Screen name="index" options={{
                tabBarLabel:"Home",
                tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />,
                title:"Home Page",
            }}/>
            <Tabs.Screen name="explore" options={{
                tabBarLabel:"Explore",
                tabBarIcon: ({color}) => <FontAwesome name="search" size={24} color={color} />,
                title:"Explore Page",
            }}/>
            <Tabs.Screen name="profile" options={{
                tabBarLabel:"Profile",
                tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />,
                tabBarBadge:3,
                title:"Profile Page",
            }}/>
        </Tabs>
    )
}