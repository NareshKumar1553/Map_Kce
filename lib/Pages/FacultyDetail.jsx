import React,{useEffect, useState} from 'react';
import { View,Text,StatusBar,StyleSheet,Linking,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
const bgColor = "white";
const FacultyDetail = ({navigation,route}) =>{
    
    useState(()=>{
        if(bgColor=="black"){
        StatusBar.setBarStyle( 'light-content',true)}
        else{
        StatusBar.setBarStyle( 'dark-content',true)}
        StatusBar.setBackgroundColor(bgColor)
      }) 
      let designation,img,LI ;
    const {name,email,Department,deg,image,LinkedIn} = route.params.user;
   if(image=="" || image==null){
         img = "https://github.com/pavanpk811/KCE_Map/raw/main/Error.png"
    }
    else{
        img = image
    }
    if(LinkedIn=="" || LinkedIn==null){
        LI = "https://www.linkedin.com/school/wekceians/"
    }
    else{
        LI = LinkedIn
    }
    if(deg=="ASP"){
        designation = "Associate Professor"
    }
    else if(deg=="HOD"){
        designation = "Head of Department"
    }
    else if(deg=="PROF"){
        designation = "Professor"
    }
    else if(deg=="AP"){
        designation = "Assistant Professor"
    }
    else if(deg=="ASSI"){
        designation = "Assistant"
    }
    else if(deg=="TUT"){
        designation = "Tutor"
    }
    else if(deg=="LAB"){
        designation = "Lab Assistant"
    }
    else if(deg=="PRINC"){
        designation = "Principal"
    }
    else if(deg==""){
        designation = "Not Available"
    }
    else{
        designation = deg
    }
    return(
        console.log("Faculty Detail Page"),
        <View style={styles.container}>
            <Image source={{uri:img}} style={styles.image}/>
            <Text style={styles.text}>Name : {name}</Text>
            <Text style={styles.text}>Department : {Department}</Text>
            <Text style={styles.text}>Email : {email}</Text>
            <Text style={styles.text}>Designation : {designation}</Text>
            <View style={{marginLeft:10,position:'absolute',bottom:30,}}>
            <TouchableOpacity 
            style={{justifyContent:'center',alignContent:'center',backgroundColor:'#000b6e',marginBottom:10,width:350,height:50,borderRadius:20}} 
            onPress={()=>{Linking.openURL(LI)}}
            >
                <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontFamily:'Cochin'}}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{justifyContent:'center',alignContent:'center',backgroundColor:'black',width:350,height:50,borderRadius:20}} 
            onPress={()=>{Linking.openURL("mailto:$"+{email}+"?subject=By KCE Explorer&body=Description")}}
            >
                <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontFamily:'Cochin'}}>Compose Mail</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default FacultyDetail;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:bgColor,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginLeft:30,
        marginTop:20,
    },
    image:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginLeft:130,
        width:105,
        height:105,
        borderRadius:105
    }

})
