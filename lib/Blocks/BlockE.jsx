import React, { useState, useEffect } from 'react';
import { TouchableOpacity,StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView } from 'react-native';
import Anim from '../Pages/Animation';

function EPage({ navigation }) {
    let bgColor = '#c8b0f5'
    useEffect(()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor(bgColor)
      }) 
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Eblock')
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
        img.push(
            <View style={{backgroundColor:"#c8b0f5"}}>
                <TouchableOpacity 
                onPress={()=>{navigation.push('BDetails',{user})}}
                style={{width:345,height:65,backgroundColor:'white',borderRadius:20,marginBottom:10}}>
                <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:24,paddingTop:12}}>{user.name}</Text>
                </TouchableOpacity>
            </View>
        )
    });
    return(
        console.log("E Block Page"),
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#c8b0f5'}}>
        <ScrollView >
            <Text style={{fontWeight:'bold',paddingBottom:15,textAlign:'center',color:'black',marginTop:15,fontSize:32}}>E Block</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default EPage;