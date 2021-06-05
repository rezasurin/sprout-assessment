import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Header from './src/components/header'
import HomePage from './src/screens/contact'

const headerHeight = 78 * 2;

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={[styles.navbarCustom]}>
          <Header {...{headerHeight}} headerWidth={width} />
        </View>
        <StatusBar style="auto" />
        <View>
          <HomePage />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbarCustom: {
    width: '100%',
    position: 'relative',
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: headerHeight /8 
  }
});
