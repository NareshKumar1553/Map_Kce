import React from 'react';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';

const AdminPage = ({navigation}) =>{
    return (
        console.log("Test Page"),
        <View style={{backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'red',fontSize:30,fontWeight:'bold',position:'absolute',top:20}}>Admin Page</Text>
            <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('StaffAdd')}}
            >
                <Text style={styles.BarText}>Faculty Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bar}
            onPress={()=>{navigation.push('Add')}}
            >
                <Text style={styles.BarText}>Block Details</Text>
            </TouchableOpacity>
        </View>
    );
}


export default AdminPage;

const styles = StyleSheet.create({
    Bar:{
        backgroundColor:'white',
        height:50,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        elevation:5,
        marginBottom:10,
        borderRadius:10,
    },
    BarText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
});