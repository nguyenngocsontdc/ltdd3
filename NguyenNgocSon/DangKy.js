/*Nguyễn Ngọc Sơn */
import React, {Component} from 'react';
import {
View, Text,StyleSheet,TextInput, TouchableOpacity
} from 'react-native';
import {red} from 'ansi-colors';

export default class DangKy extends Component {
    constructor(props){
        super(props);
        this.state={
            HOTEN:"",
            USERNAME:"",
            PASSWORD:"",
            resulf:"...",
        }
    }

    clickPlus(){
        fetch('http://192.168.129.180:81/Project_dd3/dangky.php',{
            method:"POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            
            body: JSON.stringify({
                "HOTEN":this.state.HOTEN,
                "USERNAME":this.state.USERNAME,
                "PASSWORD":this.state.PASSWORD,
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
        <View style={styles.wrapper}>
            <TextInput
            style={{height:40, borderColor:'gray', borderWidth:1}}
            onChangeText={(HOTEN) => this.setState({HOTEN})}
            placeholder="  Nhập họ tên"
            value={this.state.HOTEN}
            />
            <TextInput
            style={{height:40, borderColor:'gray', borderWidth:1,marginTop:10}}
            onChangeText={(USERNAME) => this.setState({USERNAME})}
            placeholder="  Nhập username"
            value={this.state.USERNAME}
            />
            <TextInput
            style={{height:40, borderColor:'gray', borderWidth:1,marginTop:10,marginBottom:10}}
            onChangeText={(PASSWORD) => this.setState({PASSWORD})}
            placeholder="  Nhập password"
            secureTextEntry={true}
            value={this.state.PASSWORD}
            />
            <TouchableOpacity style={styles.plus} onPress={()=>{this.clickPlus()}}>
                <Text style={styles.plusText,{fontSize:20, color:'yellow'}}> Đăng Ký </Text>
            </TouchableOpacity>
        </View>
    )
  }
}
var styles = StyleSheet.create({
    wrapper:{flex:1, backgroundColor:'rgb(234, 195, 196)', padding:50},
    plus:{padding:10, backgroundColor:"blue",justifyContent:"center",alignItems:"center"},
    plusText:{color:"white"},
    resulf:{padding:30,backgroundColor:"white",justifyContent:"center",alignItems:"center",}
});
