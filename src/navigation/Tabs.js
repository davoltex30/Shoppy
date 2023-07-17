import React from 'react';

import {Text, View} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import {AntDesign, Entypo} from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    elevation: 0,
                }
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Entypo name="home" size={24} color="#fff"/>
                            :
                            <AntDesign name="home" size={24} color="#fff"/>
                    ),
                    // tabBarButton: (props) => (
                    //     <TabBarCustomButton {...props}/>
                    // )
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name={'Scan'}*/}
            {/*    component={Scan}*/}
            {/*    options={{*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: ({focused}) => (*/}
            {/*            focused ?*/}
            {/*                <Ionicons name="scan-circle" size={24} color="black"/>*/}
            {/*                :*/}
            {/*                <Ionicons name="scan-circle-outline" size={24} color="black"/>*/}
            {/*        ),*/}
            {/*        tabBarButton: (props) => (*/}
            {/*            <TabBarCustomButton {...props}/>*/}
            {/*        )*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name={'User'}*/}
            {/*    component={HomeScreen}*/}
            {/*    options={{*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: ({focused}) => (*/}
            {/*            focused ?*/}
            {/*                <Ionicons name="person" size={24} color="black"/>*/}
            {/*                :*/}
            {/*                <Ionicons name="person-outline" size={24} color="black"/>*/}
            {/*        ),*/}
            {/*        tabBarButton: (props) => (*/}
            {/*            <TabBarCustomButton {...props}/>*/}
            {/*        )*/}
            {/*    }}*/}
            {/*/>*/}
        </Tab.Navigator>
    );
};

export default Tabs;
