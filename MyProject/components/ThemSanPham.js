/*Name: Le Quoc Dung */
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

export default class ThemSamPham extends Component {
    constructor(props){
        super(props);
        this.state={
            MASP:"",
            TENSP:"",
            SOLUONG:"",
            HINHANH:"",
        }
    }

    clickPlus(){
        fetch('http://192.168.129.180:81/Project_dd3/ThemSanPham.php',{
            method:"POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            
            body: JSON.stringify({
                "MASP":this.state.MASP,
                "TENSP":this.state.TENSP,
                "SOLUONG":this.state.SOLUONG,
                "HINHANH":this.state.HINHANH,
            })
        })
        .then((response)=>response.json())
        .then((reponseJson)=>{
            this.setState({resulf:reponseJson.id})
        })
        .catch((error)=>{console.log(error)});
    }
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
                    placeholder="Mã sản phẩm"
                    onChangeText={(MASP) => this.setState({MASP})}
                    value={this.state.MASP}></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tên sản phẩm"
                    onChangeText={(TENSP) => this.setState({TENSP})}
                    value={this.state.TENSP}></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Số Lượng"
                    onChangeText={(SOLUONG) => this.setState({SOLUONG})}
                    value={this.state.SOLUONG}></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Đường dẫn Hình ảnh"
                    onChangeText={(HINHANH) => this.setState({HINHANH})}
                    value={this.state.HINHANH}></TextInput>
                </View>
            

                <TouchableOpacity style={styles.loginButton} onPress={()=>{this.clickPlus()}}>
                  <Text style={styles.loginButtonTitle}>Thêm Sản Phẩm</Text>
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
