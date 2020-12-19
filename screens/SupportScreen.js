import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={()=> navigation.navigate("Details")}
      />
    </View>
  );
}

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});