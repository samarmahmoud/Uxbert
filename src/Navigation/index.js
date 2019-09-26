import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../Components/Screens/Splash/index';
import HomeScreen from '../Components/Screens/Home/index';

const AppStack = createStackNavigator({
  Splash: {screen: SplashScreen, navigationOptions: {header: null}},
  Home:{screen:HomeScreen,navigationOptions: {header: null}}
});

export default createAppContainer(AppStack);
