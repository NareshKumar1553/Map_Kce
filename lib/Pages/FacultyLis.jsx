import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView,StatusBar } from 'react-native';
import Anim from '../Pages/Animation';
function Faculty({ navigation }) {
    let BgColor = '#faeecd'
    let bannerColor = 'white'
    useEffect(()=>{
        StatusBar.setBarStyle( 'dark-content',false)
        StatusBar.setBackgroundColor(BgColor)
    }) 
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Faculties')
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
        console.log(user.deg)
        if(user.deg=="ASP"){
            bannerColor = 'green'
        }
        else if(user.deg=="HOD"){
            bannerColor = 'red'
        }
        else if(user.deg=="PROF"){
            bannerColor = 'blue'
        }
        else if(user.deg=="ASSO"){
            bannerColor = 'yellow'
        }
        else if(user.deg=="ASSI"){
            bannerColor = 'orange'
        }
        else if(user.deg=="TUT"){
            bannerColor = 'purple'
        }
        else if(user.deg=="LAB"){
            bannerColor = 'pink'
        }
        else if(user.deg=="LIB"){
            bannerColor = 'brown'
        }
        else if(user.deg=="SEC"){
            bannerColor = 'black'
        }
        else if(user.deg=="REG"){
            bannerColor = 'grey'
        }
        else if(user.deg=="COUN"){
            bannerColor = 'white'
        }
        else if(user.deg=="DEAN"){
            bannerColor = 'cyan'
        }
        else if(user.deg=="PRINC"){
            bannerColor = 'magenta'
        }
        else{
            bannerColor = 'blue'
        }

        img.push(
            <View style={{backgroundColor:BgColor,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:345,height:65,backgroundColor:'#ffffff',borderRadius:20,marginBottom:10}}
      onPress={()=>{navigation.push('FDetails',{user})}}
      >
      <Text style={{marginTop:5,marginLeft:30,textAlign:'center',color:'black',fontWeight:'bold',fontSize:20,paddingTop:12}}>{user.name}</Text>
      <Text style={{marginTop:10,marginRight:30,textAlign:'center',color:'black',fontWeight:'bold',fontSize:20,paddingTop:12,backgroundColor:bannerColor,borderRadius:50,height:50,width:50}}>{user.deg}</Text>
      </TouchableOpacity>
  </View>
        )
    });
    return(
        console.log("List Show"),
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#faeecd'}}>
        <ScrollView >
            <Text style={{paddingBottom:15,textAlign:'center',color:'black',fontWeight:'bold',marginTop:15,fontSize:32}}>All Faculties</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default Faculty;