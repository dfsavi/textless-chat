import React from 'react';
import {StatusBar} from 'react-native';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ChatScreen />
    </>
  );
};

export default App;
