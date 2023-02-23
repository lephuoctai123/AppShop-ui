import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Authentication } from './components/Authentication/Authentication';
import { ChangeInfo } from './components/ChangeInfo/ChangeInfo';
import { Main } from './components/Main/Main';
import { OrderHistory } from './components/OrderHjstory/OrderHjstory';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
