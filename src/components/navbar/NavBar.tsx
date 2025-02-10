import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Demographics from "../../features/demographics/Demographics";
import Explore from "../../features/explore/Explore";
import Insights from "../../features/insights/Insights";
import RealEstate from "../../features/realestate/RealEstate";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Explore"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Explore") iconName = "map-outline";
        else if (route.name === "Insights") iconName = "analytics-outline";
        else if (route.name === "Demographics")
          iconName = "document-text-outline";
        else if (route.name === "Real Estate") iconName = "home-outline";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Insights"
      component={Insights}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Real Estate"
      component={RealEstate}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Demographics"
      component={Demographics}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const NavBar = () => <TabNavigator />;

export default NavBar;
