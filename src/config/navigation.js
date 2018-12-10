import React from 'react';
import { Text, Image  } from 'react-native'
import { createBottomTabNavigator, createStackNavigator  } from 'react-navigation';
import ExploreScreen from '../screens/exploreScreen';
import MapScreen from '../screens/mapScreen';
import WanderlistScreen from '../screens/wanderlistScreen';
import WanderpointScreen from '../screens/wanderpointScreen';
import ItineraryScreen from '../screens/itineraryScreen';
import ProfileScreen from '../screens/profileScreen';

const icons = {
	filled: {
		Explore: require('../../assets/images/TabBar/Explore-filled.png'),
		Map: require('../../assets/images/TabBar/Map-filled.png'),
		Wanderlist: require('../../assets/images/TabBar/Wanderlist-filled.png'),
		Itinerary: require('../../assets/images/TabBar/Itinerary-filled.png'),
		Profile: require('../../assets/images/TabBar/Profile-filled.png'),
	},
	Explore: require('../../assets/images/TabBar/Explore.png'),
	Map: require('../../assets/images/TabBar/Map.png'),
	Wanderlist: require('../../assets/images/TabBar/Wanderlist.png'),
	Itinerary: require('../../assets/images/TabBar/Itinerary.png'),
	Profile: require('../../assets/images/TabBar/Profile.png'),
}

const ExploreStack = createStackNavigator({
	Main: ExploreScreen
})

const MapStack = createStackNavigator({
	Main: MapScreen,
	Wanderpoint: WanderpointScreen

})

const WanderlistStack = createStackNavigator({
	Main: WanderlistScreen,
	Wanderpoint: WanderpointScreen
})

const ItineraryStack = createStackNavigator({
	Main: ItineraryScreen
})

const ProfileStack = createStackNavigator({
	Main: ProfileScreen
})

export const RootStack = createBottomTabNavigator({
    Explore: ExploreStack,
    Map: MapStack,
	Wanderlist: WanderlistStack,
    Itinerary: ItineraryStack,
    Profile: ProfileStack,
  }, {
	initialRouteName: "Wanderlist",
    navigationOptions: ({ navigation }) => ({
      	tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			// You can return any component that you like here! We usually use an
			// icon component from react-native-vector-icons
			let icon;
			switch(focused) {
				case true:
					switch(routeName){
						case "Explore":
							icon = icons.filled.Explore;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;
						case "Map":
							icon = icons.filled.Map;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;
						case "Wanderlist":
							icon = icons.filled.Wanderlist;
							return <Image
								source={icon}
								style={{width: 39, height: 39}}
							/>;
						case "Itinerary":
							icon = icons.filled.Itinerary;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;
						case "Profile":
							icon = icons.filled.Profile;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;
					}				
				case false:
					switch(routeName){
						case "Explore":
							icon = icons.Explore;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;
						case "Map":
							icon = icons.Map;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;
						case "Wanderlist":
							icon = icons.Wanderlist;
							return <Image
								source={icon}
								style={{width: 39, height: 39}}
							/>;
						case "Itinerary":
							icon = icons.Itinerary;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;	
						case "Profile":
							icon = icons.Profile;
							return <Image
								source={icon}
								style={{width: 23, height: 23}}
							/>;							
					}	
			}
			
      	},
    }),
    tabBarOptions: {
		showLabel: false,
      	activeTintColor: 'tomato',
      	inactiveTintColor: 'gray',
    },
  });