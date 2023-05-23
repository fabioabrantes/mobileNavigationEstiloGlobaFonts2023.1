import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Dashboard} from '../screens/Dashboard';



const {Navigator,Screen} = createNativeStackNavigator();

export function RoutesPublic(){
  return (
     <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown:false
      }}  
    >
      <Screen name="Home" component={Home}/>
      <Screen name="Dashboard" component={Dashboard}/>
    </Navigator>
  )
}
  