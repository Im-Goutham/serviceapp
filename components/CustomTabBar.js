import React,{Component} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Dimensions ,TouchableOpacity} from 'react-native';


const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;
const tabWidth = ((deviceWidth * 13) / 25) / 2;



class CustomTabBar extends Component {


renderTabBarButton(route, idx){
       const {
           activeTintColor,
           inactiveTintColor,
           navigation,
           navigationState,
           getLabel,
           renderIcon,
       } = this.props;
       const color = navigationState.index === idx ? 'black' : 'black';
       const borderColor =  navigationState.index === idx ? 'black' : '#ffffff';
       const label = getLabel({ route });
       return (
           <TouchableOpacity
               onPress={() => {
                   if(navigationState.index != idx ){
                           navigation.navigate(route.routeName);
                   }
               }}
               style={{}} // Your style goes here
               key={route.routeName}
           >
           <View style={{
               justifyContent: 'center', // distribute them evenly
               alignItems: 'center', // we want our tab in the center of the y-axis
               backgroundColor:'white',
               borderColor: 'none',
               borderColor: 'rgb(255,255,255)',
               borderWidth: 1
           }}>
               { renderIcon({ route, tintColor:color }) }
               <Text style={{ color }}>
                   {label}
               </Text>
            </View>
           </TouchableOpacity>
       );
   }

    render() {
      const {
                activeTintColor, // font and icon color that tab is active
                getLabel, // a function that returns label's name, it's param is { route: route object(in navigationState.routes array) }
                inactiveTintColor, // font and icon color that tab is inactive
                renderIcon, // a function return the icon component according to the given condition object (you can set icon in navigationOptions)
                style,  // this style is what you pass in the tabBarOptions' style in TabNavigatorConfig
                        // usually we can set height, ex, 49 default ios bottom bar's height
                        // TabNavigatorConfig is the second param in TabNavigator function
                navigation, // navigation object, we will need it .navigate route between tabs screen
                navigationState, // holds routes array which contains all the route confis
                                 // what we pass in RouteConfigs(First param in TabNavigator function)
                                 // param is ({ focused, route, tintColor })
            } = this.props;
            const tabBarButtons = navigationState.routes.map(this.renderTabBarButton.bind(this));
            return (
                <View style={{
                    flexDirection: 'row',  // we want our tab bar is bar not column
                    justifyContent: 'space-around', // distribute them evenly
                    alignItems: 'center', // we want our tab in the center of the y-axis
                    backgroundColor:'white'
                }}>
                           { tabBarButtons }
                </View>
            );
        }
    }



export default CustomTabBar;