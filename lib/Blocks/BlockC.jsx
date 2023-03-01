import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView } from 'react-native';
import Anim from '../Animation';
function CPage({ navigation }) {
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Cblock')
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
            <View style={{backgroundColor:"black"}}>
                <TouchableOpacity style={{width:345,height:65,backgroundColor:'pink',borderRadius:20,marginBottom:10}}>
                <Text style={{textAlign:'center',color:'#ff8c00',fontWeight:'bold',fontSize:24,paddingTop:12}}>{user.name}</Text>
                </TouchableOpacity>
            </View>
        )
    });
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
        <ScrollView >
            <Text style={{paddingBottom:15,textAlign:'center',color:'white',marginTop:15,fontSize:32}}>C Block</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default CPage;