import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image,ScrollView,StatusBar,StyleSheet } from 'react-native';
import Anim from '../Pages/Animation';
function Faculty({ navigation,route }) {
    //let bgColor = '#faeecd'
    let bannerColor = 'white'
    const bgColor = 'white'
     useEffect(()=>{
    StatusBar.setBarStyle( 'dark-content',false)
    StatusBar.setBackgroundColor(bgColor)
  }) 
    var img = [];
    const {name,pos} = route.params;
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
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
        else if(user.deg=="AP"){
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
            <View style={{backgroundColor:bgColor,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.Bar}
      onPress={()=>{navigation.push('FDetails',{user})}}
      >
      <Text style={styles.BarText}>{user.name}</Text>
      <Text style={{marginTop:10,marginRight:30,textAlign:'center',color:'black',fontWeight:'bold',fontSize:20,paddingTop:12,backgroundColor:bannerColor,borderRadius:45,height:45,width:45}}>{user.deg}</Text>
      </TouchableOpacity>
  </View>
        )
    });
    return(
        console.log("Faculty List",pos),
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <ScrollView >
            <Text style={{paddingBottom:15,textAlign:'center',color:'black',fontWeight:'bold',marginTop:15,fontSize:24}}>{pos}</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default Faculty;

const styles = StyleSheet.create({
    Bar:{
        backgroundColor:'#ddebe1',
        height:70,
        width:350,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        elevation:5,
        marginBottom:10,
        borderRadius:10,
        marginTop:15,
    },
    BarText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
});
