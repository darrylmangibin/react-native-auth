import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 3,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    position: 'relative'
  }
})

export { Header };