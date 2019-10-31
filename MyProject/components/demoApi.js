
import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View,
  StatusBar,
} from 'react-native';

    var URL = 'http://172.168.83.159/fetchapi/LoadData.php'

export default class demoApi extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.dataSource({rowHasChanged:(r1, r2) => r1 !== r2})
        }
    }

    fetchData(){
        fetch(URL, {method: "POST", body: null})
        .then((response) => response.json())
        .then((reponseData) =>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(reponseData)
            })
        })
        .done()
    }
    
    componentDidMount(){
        this.fetchData();
    }

    taoHang(property){
        return(
            <View style={styles.hang}>
            <View style={styles.hienthi}>
                <Text>{property.tenSP}</Text>
            </View>
            <View style={styles.hienthi}>
                <Text>{property.giaSP}</Text>
            </View>
        </View>
        );
    }

    
  render() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.danhsach}>
                <ListView dataSource={this.state.dataSource}
                renderRow={this.taoHang}/>
            </View>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  danhsach:{
    flex: 1,
  },
  hang:{
      flexDirection: 'column',
      flex: 1
  },
  hienthi:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
  }

  
})
