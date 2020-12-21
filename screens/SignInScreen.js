import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, Platform, StyleSheet } from 'react-native'
import MainTabScreen from "./MainTabScreen"
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import firebase from '../components/firebase.js';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const handleEmailChange= (val) =>{
      setData({
        ...data,
        email: val
      });
    }

    const handlePasswordChange= (val) =>{
      setData({
        ...data,
        password: val
      });
    }
    
    const updateSecureTextEntry =() =>
    {
      setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
      });
    }

    const loginHandle = (email, password)=>{
      firebase.auth().signInWithEmailAndPassword(email,password)
      .catch(()=>{console.log('signin failed')});
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
      <Text style={styles.text_footer}>Email</Text>
      <View style={styles.action}>
        <FontAwesome
        name="user-o"
        color="#05375a"
        size={25}
        />
        <TextInput
          placeholder= "Enter your email"
          style={styles.textInput} 
          autoCapitalize='none'
          onChangeText={(val) => handleEmailChange(val)}
        />
      </View>
      <Text style={[styles.text_footer], {marginTop: 35}}>Password</Text>
      <View style={styles.action}>
        <FontAwesome
        name="lock"
        color="#05375a"
        size={25}
        />
        <TextInput
          placeholder= "Enter your password"
          style={styles.textInput} 
          autoCapitalize='none'
          secureTextEntry={data.secureTextEntry? true:false}
          onChangeText={(val) => handlePasswordChange(val)} 
        />
        <TouchableOpacity
        onPress={updateSecureTextEntry}
        
        >
         {data.secureTextEntry?
         <Feather
        name="eye-off"
        color="grey"
        size={20}
        /> :
         <Feather
        name="eye"
        color="grey"
        size={20}
        />
         }
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.email, data.password )}}
                >
                <LinearGradient
                    colors={['#bbe1fa', '#40a8c4']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#40a8c4',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#40a8c4'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
      </Animatable.View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#cdeff0'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    text_header: {
        color: '#1b2530',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 15
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -10,
        paddingLeft: 15,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });