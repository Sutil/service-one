import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import JobEdit from './pages/JobEdit';
import Loading from './pages/Loading';

const AuthStack = createFluidNavigator(
  {
    Login,
    SignUp,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const AppStack = createStackNavigator(
  {
    Home,
    JobEdit,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#49265c',
      },
      headerTintColor: '#fff',
    },
  }
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Loading,
    AuthStack,
    AppStack,
  })
);

export default Routes;
