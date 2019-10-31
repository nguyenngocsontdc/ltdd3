/**
 *Name: Lê Quốc Dũng 
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, 
} from 'react-native';

var icon;

export default class SanPham extends Component{
    
  constructor(props){
    super(props);
    this.state={
      SL : 1
    }

  }

  tangSLuong(){
      this.setState({
        SL: this.state.SL + 1
      });
  }

  giamSLuong(){
   if(this.state.SL > 0)
   {
    this.setState({
        SL: this.state.SL - 1
      });
   }
}

  render() {
    return (
        <View style={styles.product}>
        <View style={styles.containerImg}>
          <View>
            <Image style={styles.img} source={{uri: this.props.img}} />
          </View>
          <View >         
            <Text style={styles.soLuongText}> Số lượng: {this.state.SL}</Text>
          </View>
          <View style={{width: 20, height: 20}}>
            <TouchableOpacity onPress={()=> this.tangSLuong()}><Text style={styles.tangSL}>+</Text></TouchableOpacity>
          </View>
          <View style={{width: 20, height: 20, marginLeft: 30, marginTop: -20}}>
            <TouchableOpacity onPress={()=> this.giamSLuong()}><Text style={styles.giamSL}>-</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerContent}>
          <Text> Mã sản phẩm : {this.props.maSP} </Text>
          <Text> Tên sản phẩm : {this.props.tenSP} </Text>
          
        </View>    
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  product: {
    justifyContent: 'center',
    //alignItems: 'center',
    width: 400,
    height: 110,
    marginBottom : 10,
    backgroundColor: 'rgb(234, 195, 196)'
  },

  productText: {
    marginBottom : 5,
  },

  img: {
    marginTop: -25,
    width: 70,
    height:70,
  },
  containerImg: {
    width: 100,
    height: 150,
    marginLeft: 10
  },

  containerContent: {
    marginTop:-150,
    marginLeft: 80
  },

  soLuong:{
    marginLeft: 20,
  },

  soLuongText: {
    fontSize: 12
  }, 

  giamSL: {
    backgroundColor: 'white',
    textAlign:'center', 
    borderRadius: 5

  },
  tangSL: {
    backgroundColor: 'white',
    textAlign:'center',
    borderRadius: 5
    }
});
