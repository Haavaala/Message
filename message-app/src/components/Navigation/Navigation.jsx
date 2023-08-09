import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import MessagePage from '../../pages/MessagePage/MessagePage';
import HomePage from '../../pages/HomePage/Homepage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import SearchUsers from '../../pages/SearchUsers/SearchUsers';


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Page name="Home" component={HomePage} />
      <Tab.Page name="Search" component={SearchUsers} />
      <Tab.Page name="Chat" component={MessagePage} />
      <Tab.Page name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default Navigation

