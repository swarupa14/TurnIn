import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ClassScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
      <Button
        title="Click me!"
        onPress={()=> navigation.navigate("Details")}
      />
    </View>
  );
}

export default ClassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});