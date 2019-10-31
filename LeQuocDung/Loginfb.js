/*Nguyễn Ngọc Sơn */
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    Keyboard,
    TouchableOpacity,
  } from 'react-native';
import { red } from 'ansi-colors';
import IOnicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Loginfb extends Component {
    render() {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <StatusBar barStyle="light-content" />
              <View style={styles.up}>
                <IOnicons
                  name="ios-speedometer"
                  size={100}
                  color={'red'}></IOnicons>
              </View>
              <View style={styles.down}>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder="Enter your email"></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter your password"
                    secureTextEntry={true}></TextInput>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonTitle}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:'rgb(234, 195, 196)',
    },
    up:{
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    down:{
        flex:7,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'

    },
    title:{
        color:'white',
        textAlign:'center',
        color:'rgb(255,119,34)',
        width:400,
        fontSize:23
    },
    textInputContainer:{
        paddingHorizontal:10,
        borderRadius:6,
        marginBottom:20,
        backgroundColor:'rgba(255,255,255,0.2)'
    },
    textInput:{
        width:280,
        height:45,
    },
    loginButton:{
        width:300,
        height:45,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(221, 97,97)'
    },
    loginButtonTitle:{
        fontSize:18,
        color:'white'
    }
})
