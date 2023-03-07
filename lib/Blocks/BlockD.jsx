import React, { useState, useEffect } from 'react';
import { TouchableOpacity,StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView } from 'react-native';
import Anim from '../Pages/Animation';

function DPage({ navigation }) {
    let bgColor = '#c8b0f5'
    useEffect(()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor(bgColor)
      }) 
    const [Longitude] = useState([]);
   
    
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Dblock')
            .get()
            .then(querySnapshot => {
                console.log('Total Data: ', querySnapshot.size);
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                   // console.log(documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setUsers(users);
                setLoading(false);
            });
        return () => subscriber
    }, []);

    if (loading) {
        return <Anim/>;
    }
    users.map(user => {
        loc = {user}.user.location;
        const loc1 = toArray(loc);
        if(loc1.length != 0){
        Longitude.push(loc1);
        }
        //console.log(Longitude[0]);
        img.push(
            <View style={{backgroundColor:"#c8b0f5"}}>
                <TouchableOpacity 
                onPress={()=>{navigation.push('BDetails',{user},Longitude[0])}}
                style={{width:345,height:65,backgroundColor:'white',borderRadius:20,marginBottom:10}}>
                <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:24,paddingTop:12}}>{user.name}</Text>
                </TouchableOpacity>
            </View>
        )
    });
    return(
        console.log("D Block Page"),
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#c8b0f5'}}>
        <ScrollView >
            <Text style={{fontWeight:'bold',paddingBottom:15,textAlign:'center',color:'black',marginTop:15,fontSize:32}}>D Block</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default DPage;

function toArray(obj) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value)); // <- recursive call
        }
        else {
            result.push(value);
        }
    }
    return result;
}