import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import config from './src/aws-exports';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import ConfirmSignUp from './src/Screens/ConfirmSignUp';
import LiveStreamingScreen from './src/Screens/LiveStreamingScreen';
import VideoP2PCall from './src/Screens/VideoP2PCallScreen';
import VideoGroupCall from './src/Screens/VideoGroupCallScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';


Amplify.configure(config);

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();
const AuthenticationNavigator = props => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="SignIn">
        {screenProps => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
      />
    </AuthenticationStack.Navigator>
  );
};
const AppNavigator = props => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="ProfileScreen">
        {screenProps => (
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <ProfileScreen {...screenProps} updateAuthState={props.updateAuthState} />
          </ApplicationProvider>
        )}
      </AppStack.Screen>

      <AppStack.Screen 
        name="LiveStreamingScreen"
        component={LiveStreamingScreen}
      />

      <AppStack.Screen 
        name="VideoP2PCall"
        component={VideoP2PCall}
      />

      <AppStack.Screen 
        name="VideoGroupCall"
        component={VideoGroupCall}
      />
    </AppStack.Navigator>
  );
};

const randomImages = [
  'https://microwaresolutions.com/wp-content/uploads/2021/03/anthonia2-.png',
  'https://microwaresolutions.com/wp-content/uploads/2021/03/Austin_.png',
  'https://microwaresolutions.com/wp-content/uploads/2021/02/anthonia.jpg',
]

const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="purple" />
    </View>
  );
};

function App() {
  {  
    const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

    const getRamdomImage = () => {
      return randomImages[Math.floor(Math.random() * randomImages.length)];
    }

    useEffect(() => {
      checkAuthState();
    }, []);

    async function checkAuthState() {
      try {
        const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
        console.log('✅ User is signed in');
        setUserLoggedIn('loggedIn');
        
        if(userInfo) {
          const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
          if(userData.data.getUser){
            console.log("User already registered in database");
            return;
          }
          console.log(userData);

          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: getRamdomImage(),
            status: 'Online'
          }

          await API.graphql(
            graphqlOperation(
              createUser,
              {input: newUser}
            )
          )
        }
      } catch (err) {
        console.log('❌ User is not signed in');
        setUserLoggedIn('loggedOut');
      }
    }

    function updateAuthState(isUserLoggedIn) {
      setUserLoggedIn(isUserLoggedIn);
    }

    return (
      <NavigationContainer>
        {isUserLoggedIn === 'initializing' && <Initializing />}
        {isUserLoggedIn === 'loggedIn' && (
          <AppNavigator updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === 'loggedOut' && (
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
    );
  }
}

export default App;