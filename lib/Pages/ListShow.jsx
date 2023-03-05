import React,{useEffect} from 'react';
import { View, Text,TouchableOpacity,StatusBar,StyleSheet,ScrollView } from 'react-native';

function ListShow({navigation}) {
    let BgColor = "white";
    useEffect(()=>{
        StatusBar.setBarStyle( 'dark-content',false)
        StatusBar.setBackgroundColor(BgColor)
    })
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <Text style={{textAlign:'center',fontSize:24,color:'#ffa319',fontWeight:'bold',paddingTop:15,paddingBottom:20}}>Block Wise</Text>
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('APage')}}
        >
            <Text style={styles.text}>A Block</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push("BPage")}}
        >
            <Text style={styles.text}>B Block</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('CPage')}}
        >
            <Text style={styles.text}>C Block</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('DPage')}}
        >
            <Text style={styles.text}>D Block</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('EPage')}}
        >
            <Text style={styles.text}>E Block</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('Add')}}
        >
            <Text style={styles.text}>Admin</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        color:'#a617ff'
    },
    Bar:{
        backgroundColor: '#b3fffa',
        height: 70,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 5,
        paddingBottom:15,
        paddingTop:15,
        marginBottom:15,
        borderRadius:10,
        marginLeft:10,
    }
});
export default ListShow;