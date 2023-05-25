import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  VirtualizedList,
} from 'react-native';
import AppFileManager from './Projects/FileManager/App';



function App(){

  return (
    <AppFileManager />
  );
}


export default App;
