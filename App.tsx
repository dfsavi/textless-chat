/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import ChatScreen from './src/screens/ChatScreen';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ChatScreen />
    </>
  );
};

export default App;
