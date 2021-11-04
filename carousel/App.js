import React from 'react';
import { Text, View, SafeAreaView, StatusBar} from 'react-native';
import Categories from './components/Categories';

export default function App() {
  
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <Categories />
    </SafeAreaView>
  )
}