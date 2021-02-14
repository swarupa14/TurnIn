import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ToDoScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello this is Swarupa!</Text>
      <Button
        title="Go to Details Screen"
        onPress={()=> navigation.navigate("Details")}
      />
    </View>
  );
}

export default ToDoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});