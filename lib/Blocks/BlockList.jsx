import React,{useEffect} from 'react';
import { View, Text,TouchableOpacity,StatusBar,StyleSheet,ScrollView } from 'react-native';

function ListShow({navigation}) {
    let BgColor = "white";
    useEffect(()=>{
        StatusBar.setBarStyle( 'dark-content',false)
        StatusBar.setBackgroundColor(BgColor)
    })
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <ScrollView style={{backgroundColor:'white'}}>
        <Text style={{textAlign:'center',fontSize:24,color:'#ffa319',fontWeight:'bold',paddingTop:15,paddingBottom:20}}>Block Wise</Text>
       <View> 
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('BlockLab',{name:'Ablock',Labname:'A block Lab'})}}
        >
            <Text style={styles.text}>A Block</Text>
        </TouchableOpacity>
        </View>
        <View> 
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push("BlockLab",{name:'Bblock',Labname:'B block Lab'})}}
        >
            <Text style={styles.text}>B Block</Text>
        </TouchableOpacity>
        </View>
        <View> 
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('BlockLab',{name:'Cblock',Labname:'C block Lab'})}}
        >
            <Text style={styles.text}>C Block</Text>
        </TouchableOpacity>
        </View>
        <View> 
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('BlockLab',{name:'Dblock',Labname:'D block Lab'})}}
        >
            <Text style={styles.text}>D Block</Text>
        </TouchableOpacity>
        </View>
        <View> 
        <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('BlockLab',{name:'Eblock',Labname:'E block Lab'})}}
        >
            <Text style={styles.text}>E Block</Text>
        </TouchableOpacity>
        </View>
        <View> 
        {/* <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('Add')}}
        >
            <Text style={styles.text}>Admin</Text>
        </TouchableOpacity> */}
        </View>
      </ScrollView>
      </View>
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