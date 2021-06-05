import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Menu from '../../assets/Menu'

export default function Header ({ headerHeight, headerWidth }) {
  
  return (
    <>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
          <Menu />
          <Text style={[styles.title, {marginLeft: headerWidth/3.5}]}>Contact</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#3ECBA9',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      height: 5
    },
    shadowOpacity: 0.6
  },
  title: {color: 'white', fontSize: 24, fontWeight: '800', fontFamily: 'Helvetica'},
});
