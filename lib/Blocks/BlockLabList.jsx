import React, { useState, useEffect } from 'react';
import { TouchableOpacity,StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView } from 'react-native';
import Anim from '../Pages/Animation';

function BlockLabList({ navigation,route }) {
    let bgColor = 'white';
   useEffect(()=>{
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor('#78756e')
    })
    var img = [];
    const {name,Labname} = route.params;
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    console.log("NeededImage ",NeededImage);
    useEffect(() => {
        const subscriber = firestore()
            .collection(name)
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
        console.log({user}),
        img.push(
            <View style={{backgroundColor:"white"}}>
                <TouchableOpacity 
                onPress={()=>{navigation.push('BDetails',{user})}}
                style={{width:345,height:65,backgroundColor:'#febdff',borderRadius:20,marginBottom:10}}>
                <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:24,paddingTop:12}}>{user.name}</Text>
                </TouchableOpacity>
            </View>
        )
    });
    return(
        console.log("Block List Page"),
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Image source={{uri:"https://github.com/pavanpk811/KCE_Map/raw/main/"+name+".png"}} style={{width:'100%',height:250}}/>
        <ScrollView >
            <Text style={{fontWeight:'bold',paddingBottom:15,textAlign:'center',color:'black',marginTop:15,fontSize:32}}>{Labname}</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default BlockLabList;