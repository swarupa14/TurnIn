import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'

// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style= {styles.header}>
        <Animatable.Image animation="bounceIn" source= {require('../assets/Turnin.png')} style={styles.logo} resizeMode="stretch" />
      </View>
      <Animatable.View animation="fadeInUpBig" style= {styles.footer}>
        <Text style={styles.title} >Stay connected with everyone</Text>
        <Text style={styles.text} >Sign in with an account</Text>
        <View style={styles.button}> 
        <TouchableOpacity onPress= {()=> navigation.navigate('SignInScreen')}>
          <LinearGradient
          colors={['#bbe1fa', '#40a8c4']}
          style={styles.signIn}>
            <Text style={styles.textSign}>Get Started</Text>
          <MaterialIcons 
            name="navigate-next"
            color="#fff"
            size={20}
          />
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#cdeff0'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 100,
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});